import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Icompany } from '../Models/icompany';
import { IcompanyDetails } from '../Models/icompany-details';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor(private http: HttpClient) {}


  getAllCompanies(): Observable<Icompany> {
    return this.http.get<Icompany>(
      `${environment.companyProfile}/Companies/GetList`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdCQTRCRTFEMjI2RDcwRDA2QkE1NkIzMzlDODcxQTdCNkQ3NEM2MkFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImU2Uy1IU0p0Y05CcnBXc3puSWNhZTIxMHhpbyJ9.eyJuYmYiOjE3MTcwNjc1MTAsImV4cCI6MTcxNzA3MTExMCwiaXNzIjoiaHR0cHM6Ly8xOTIuMTY4LjEuMzc6NzA4NyIsImNsaWVudF9pZCI6IkdlbmVyYWxDbGllbnQiLCJzdWIiOiI3NDg0OGU0Zi04ODI5LTRmMDItOWUyYy01ZmRiNmI5ZTczNjciLCJhdXRoX3RpbWUiOjE3MTcwNjc1MTAsImlkcCI6ImxvY2FsIiwicm9sZSI6Ik93bmVyIiwiZW1haWwiOiI5YWY4MmZkZjdhQGVtYWlsY2JveC5wcm8iLCJjb21wYW55SWQiOiJhOTU5ZjNjYi00NjIxLTQ3MjAtOWYxNy0yMWE2MzRiNWFjNDciLCJvd25lcklkIjoiNzQ4NDhlNGYtODgyOS00ZjAyLTllMmMtNWZkYjZiOWU3MzY3IiwibmFtZSI6Ijc0ODQ4ZTRmLTg4MjktNGYwMi05ZTJjLTVmZGI2YjllNzM2NyIsImp0aSI6IkJCMjkxRURDN0M2MzY0NTkyQjgwRTZDNTM2ODM2REExIiwiaWF0IjoxNzE3MDY3NTEwLCJzY29wZSI6WyJBdXRoOkdlbmVyYWwiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicGFzc3dvcmQiXX0.T5K74-m-QGpZqNI3fBnMJhZvQi21K8RrI2S1XyubZMUM16hSPjP_YznoUX-eBhUQumdP88sx_sg3DByIzVpVl4UIJwSEvvX8lZ3kdDLVp98z_epamuwOCbQ5OeWfI7eyJgJlkvfvgkNkcyyky-IrUVCctL1ZfCpB8nw50Ov7EiMGqlyy36f7fcmXxvwiGGDSR3wfGquAEtyZrGjJsLTAaeOITZIbYEm-fNUQFBcx0FyScY5CSTXVAyncqaaCBywCBpomBPKYb4KHLBG2Wg1OsY891xtfDbdn_k3iDfK9MYaY2jwShC1QPyr3wEzpgrqE8YdkeblopE0HguCHH32VnA`,
        },
      },
    );
  }
  getCompanyDetails(): Observable<IcompanyDetails> {
    return this.http.get<IcompanyDetails>(
      `${environment.companyProfile}/Companies/GetCompany`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdCQTRCRTFEMjI2RDcwRDA2QkE1NkIzMzlDODcxQTdCNkQ3NEM2MkFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImU2Uy1IU0p0Y05CcnBXc3puSWNhZTIxMHhpbyJ9.eyJuYmYiOjE3MTcwNjc1MTAsImV4cCI6MTcxNzA3MTExMCwiaXNzIjoiaHR0cHM6Ly8xOTIuMTY4LjEuMzc6NzA4NyIsImNsaWVudF9pZCI6IkdlbmVyYWxDbGllbnQiLCJzdWIiOiI3NDg0OGU0Zi04ODI5LTRmMDItOWUyYy01ZmRiNmI5ZTczNjciLCJhdXRoX3RpbWUiOjE3MTcwNjc1MTAsImlkcCI6ImxvY2FsIiwicm9sZSI6Ik93bmVyIiwiZW1haWwiOiI5YWY4MmZkZjdhQGVtYWlsY2JveC5wcm8iLCJjb21wYW55SWQiOiJhOTU5ZjNjYi00NjIxLTQ3MjAtOWYxNy0yMWE2MzRiNWFjNDciLCJvd25lcklkIjoiNzQ4NDhlNGYtODgyOS00ZjAyLTllMmMtNWZkYjZiOWU3MzY3IiwibmFtZSI6Ijc0ODQ4ZTRmLTg4MjktNGYwMi05ZTJjLTVmZGI2YjllNzM2NyIsImp0aSI6IkJCMjkxRURDN0M2MzY0NTkyQjgwRTZDNTM2ODM2REExIiwiaWF0IjoxNzE3MDY3NTEwLCJzY29wZSI6WyJBdXRoOkdlbmVyYWwiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicGFzc3dvcmQiXX0.T5K74-m-QGpZqNI3fBnMJhZvQi21K8RrI2S1XyubZMUM16hSPjP_YznoUX-eBhUQumdP88sx_sg3DByIzVpVl4UIJwSEvvX8lZ3kdDLVp98z_epamuwOCbQ5OeWfI7eyJgJlkvfvgkNkcyyky-IrUVCctL1ZfCpB8nw50Ov7EiMGqlyy36f7fcmXxvwiGGDSR3wfGquAEtyZrGjJsLTAaeOITZIbYEm-fNUQFBcx0FyScY5CSTXVAyncqaaCBywCBpomBPKYb4KHLBG2Wg1OsY891xtfDbdn_k3iDfK9MYaY2jwShC1QPyr3wEzpgrqE8YdkeblopE0HguCHH32VnA`,
        },
      },
    );
  }
}
