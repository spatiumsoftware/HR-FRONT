import { NgClass, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { attachmentsService } from '../../../../services/attachments.service';
import { UploadComponent } from './upload/upload.component';
import { LoadedComponent } from './loaded/loaded.component';
import { Router, RouterLink } from '@angular/router';
import { LoaderComponent } from '../../../../shared-components/loader/loader.component';
import { finalize } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-company-files',
  templateUrl: './company-files.component.html',
  styleUrls: ['./company-files.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgStyle,
    UploadComponent,
    LoadedComponent,
    RouterLink,
    LoaderComponent,
    TranslateModule,
  ],
  providers: [attachmentsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyFilesComponent implements OnInit {
  constructor() {
    effect(() => {
      if (this.bulkProgress() >= 90) {
        this.filesLoaded = [...this.filesLoaded, ...this.filesUploaded];
        this.filesUploaded = [];
      }
    });
  }
  // injection
  private attachService = inject(attachmentsService);
  private router = inject(Router);
  messageService = inject(MessageService);

  filesForm: FormGroup;
  taxFile: any;
  registerFile: any;
  filesLoaded = [];
  filesUploaded = [];
  loading = signal<boolean>(false);

  // signals for each file to manage it's state
  registerProgress = this.attachService.registerProgress;
  taxProgress = this.attachService.taxProgress;
  bulkProgress = this.attachService.bulkProgress;

  ngOnInit(): void {
    // form group Initialization
    this.filesForm = new FormGroup({
      register: new FormControl('', Validators.required),
      tax: new FormControl('', Validators.required),
      more: new FormControl(''),
    });
    // call Get Document ID Function from attachment service
    this.attachService.getDocId();
  }

  uploadFile(e: any) {
    const supported = ['png', 'pdf', 'jpg'];
    if (
      supported.includes(
        (e.target as HTMLInputElement).files[0].name.split('.').pop()
      )
    ) {
      const formData = new FormData();
      let id = '';
      if (e.type === 'change') {
        id = (e.target as HTMLElement).id;
        id === 'tax'
          ? (this.taxFile = (e.target as HTMLInputElement).files[0])
          : (this.registerFile = (e.target as HTMLInputElement).files[0]);
      } else {
        e.preventDefault();
        id = (e.target as HTMLElement).firstElementChild.id;
        id === 'tax'
          ? (this.taxFile = (e.target as HTMLInputElement).files[0])
          : (this.registerFile = (e.target as HTMLInputElement).files[0]);
      }
      if (id === 'tax') {
        this.filesForm.get(id)?.setValue(this.taxFile);
        formData.append('file', this.taxFile);
        this.attachService.uploadFile(formData, id);
      } else {
        this.filesForm.get(id)?.setValue(this.registerFile);
        formData.append('file', this.registerFile);
        this.attachService.uploadFile(formData, id);
      }
    } else {
      this.messageService.clear();
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Unsupported file format',
        life: 4000,
      });
    }
  }

  bulkFiles(e: any) {
    if (e.type !== 'change') {
      e.preventDefault();
    }
    // check for more than 10 files
    if (this.filesLoaded.length >= 10) {
      this.messageService.clear();
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: "Can't Upload more than 10 Files",
        life: 4000,
      });
    } else {
      let Data = [],
        acceptedFiles = [];
      // check for supported files and Size
      const supported = [
        'csv',
        'xlsx',
        'xls',
        'doc',
        'docs',
        'pdf',
        'xml',
        'ppt',
        'jpg',
        'png',
      ];

      // store the files in Data Variable
      Data =
        e.type === 'change'
          ? Array.from((e.target as HTMLInputElement).files)
          : Array.from(e.dataTransfer.files);
      // to decide which error happens
      let format = false,
        size = false,
        both = false;
      // check for supported files and Size and store it in acceptedFiles
      for (let i = 0; i < Data.length; i++) {
        if (
          !supported.includes(Data[i]['name'].split('.').pop()) &&
          Data[i]['size'] * 0.001 > 10000
        ) {
          both = true;
        } else if (!supported.includes(Data[i]['name'].split('.').pop())) {
          format = true;
        } else if (Data[i]['size'] * 0.001 > 10000) {
          size = true;
        } else {
          acceptedFiles.push(Data[i]);
        }
      }

      acceptedFiles = acceptedFiles.slice(0, 10 - this.filesLoaded.length);

      // check if there is existing files
      if (acceptedFiles.length > 0) {
        const formData = new FormData();
        this.filesUploaded = [...acceptedFiles];
        this.filesForm.get('more')?.setValue([...this.filesUploaded]);
        for (let i = 0; i < this.filesUploaded.length; i++) {
          formData.append('files', this.filesUploaded[i]);
        }
        this.attachService.bulkFiles(formData);
      }
      // check for errors and show them
      if (acceptedFiles.length !== Data.length) {
        this.messageService.clear();
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: format
            ? 'Sorry, The Uploaded File is not supported.'
            : size
            ? "One of The Files' size is more than 10 MB."
            : both
            ? "Sorry, One or More of The Uploaded File is not supported and One or More of The Files' size is more than 10 MB."
            : '',
          life: 4000,
        });
      }
    }
  }

  onNavigate() {
    // extract the names of the loaded files from the loaded files array
    const names = this.filesLoaded.map((file) => file.name);
    this.loading.set(true);
    this.attachService
      .sendDocuments(names)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe((res) => {
        this.router.navigate(['/verified/upAttach'], {
          skipLocationChange: true,
        });
      });
  }
}
