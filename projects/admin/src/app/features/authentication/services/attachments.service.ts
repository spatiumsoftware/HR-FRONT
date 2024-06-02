import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, tap, throwError, filter } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable()
export class attachmentsService {
  constructor(private http: HttpClient) {}
  registerProgress = signal<number>(0);
  taxProgress = signal<number>(0);
  failUpload!: boolean;
  failBulk!: boolean;
  bulkProgress = signal<number>(0);
  ids: {
    tax: {
      id: number;
      path: string;
    };
    commercial: {
      id: number;
      path: string;
    };
    other: {
      id: number;
      files: { name: string; path: string }[];
    };
  } = {
    tax: {
      id: 0,
      path: '',
    },
    commercial: {
      id: 0,
      path: '',
    },
    other: {
      id: 0,
      files: [],
    },
  };

  // Get Document ID
  getDocId() {
    this.http
      .get(`${environment.baseAPI}/Documents/GetRequiredDocuments`)
      .subscribe((res: Array<any>) => {
        res.forEach((element) => {
          switch (element.type) {
            case 'Tax Card':
              this.ids.tax.id = element.id;
              break;
            case 'Commercial Certificate':
              this.ids.commercial.id = element.id;
              break;
            case 'Other':
              this.ids.other.id = element.id;
              break;
          }
        });
      });
  }

  // function to upload single file
  uploadFile(file: FormData, from: string) {
    this.failUpload = false;
    const req = new HttpRequest(
      'POST',
      `${environment.attachments}/Attachments/Upload`,
      file,
      {
        reportProgress: true,
      }
    );
    this.http
      .request(req)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            // set progress value based on from parent
            if (from === 'tax') {
              this.taxProgress.set(
                event.total ? Math.round((100 * event.loaded) / event.total) : 0
              );
            } else {
              this.registerProgress.set(
                event.total ? Math.round((100 * event.loaded) / event.total) : 0
              );
            }
          }
        }),
        filter((event) => event.type === HttpEventType.Response),
        map((event: HttpResponse<any>) => event.body)
      )
      .subscribe(
        (res) => {
          if (res) {
            if (from === 'tax') {
              this.ids.tax.path = res['message'];
            } else {
              this.ids.commercial.path = res['message'];
            }
          }
        },
        (err) => {
          if (from === 'tax') {
            this.taxProgress.set(0);
          } else {
            this.registerProgress.set(0);
          }
        }
      );
  }

  // function to upload multiple files
  bulkFiles(files: FormData) {
    this.failBulk = false;
    this.bulkProgress.set(0);
    const req = new HttpRequest(
      'POST',
      `${environment.attachments}/Attachments/Bulk`,
      files,
      {
        reportProgress: true,
      }
    );
    this.http
      .request(req)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.bulkProgress.set(
              event.total ? Math.round((100 * event.loaded) / event.total) : 0
            );
          }
        }),
        filter((event) => event.type === HttpEventType.Response),
        map((event: HttpResponse<any>) => event.body)
      )
      .subscribe((res) => {
        res.forEach((element, i) => {
          this.ids.other.files.push({
            name: files.getAll('files')[i]['name'],
            path: element,
          });
        });
      });
  }

  // send the final uploaded files
  sendDocuments(files: string[]) {
    // remove files that removed from the UI before sending
    this.ids.other.files = this.ids.other.files.filter((element) =>
      files.includes(element.name)
    );
    // destructure the ids object
    const {
      tax: { id: taxID, path: taxPath },
      commercial: { id: commercialID, path: commercialPath },
      other: { id: otherID, files: otherFiles },
    } = this.ids;
    // set the data at the body object
    let body: {
      registerationDocumentTypeId: number;
      path: string;
    }[] = [
      {
        registerationDocumentTypeId: taxID,
        path: taxPath,
      },
      {
        registerationDocumentTypeId: commercialID,
        path: commercialPath,
      },
    ];
    // add the other files to the body
    otherFiles.forEach((element) => {
      body.push({
        registerationDocumentTypeId: otherID,
        path: element.path,
      });
    });
    console.log(body);
    // send the request
    return this.http.post(`${environment.baseAPI}/Documents`, body);
  }
}
