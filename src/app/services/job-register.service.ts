import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addjobregister } from '../models/addjobregister';
import { jobregister } from '../models/job-register';
import { searchJobRegister } from '../models/jobregister/searchjobregister';
import { jobregisterps } from '../models/jodregister-profilestatus';

@Injectable({
  providedIn: 'root'
})
export class JobRegisterService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getJobRegister(): Observable<jobregister[]> {
    return this.http.get<any>(`${this.apiServerUrl}/user/jobregister`).pipe(
      tap(receivedJobRegister => console.log(`receivedJob=${JSON.stringify(receivedJobRegister)}`))
    );
  }

  public getJobRegisterById(id: number): Observable<jobregisterps> {
    const url = `${this.apiServerUrl}` + "/user/jobregister/" + `${id}`
    return this.http.get<any>(url).pipe(
      tap(receivedJobRegister => console.log(`receivedJobRegister=${JSON.stringify(receivedJobRegister)}`))
    );
  }

  public updateJobRegist(jobregister: addjobregister): Observable<addjobregister> {
    const url = `${this.apiServerUrl}` + "/user/jobregister";
    return this.http.post<addjobregister>(url, jobregister);
  }

  public delete(id: number): Observable<jobregister>{
    const url =  `${this.apiServerUrl}` + "/user/jobregister/" + `${id}`
    return this.http.delete<any>(url).pipe(
      tap(notyfy=>console.log("xóa thàng công"))
    )
  }

  public getAllJobregister(pageN: number, pageS: number): Observable<jobregister[]>{
    const url =  `${this.apiServerUrl}` + "/user/jobregister/"+`${pageN}`+"/"+`${pageS}`
    return this.http.get<jobregister[]>(url);
  }

  public getSearchJobRegister(search:searchJobRegister):Observable<jobregister[]>{
    const url =  `${this.apiServerUrl}` + "/user/jobregister/search"
    return this.http.put<jobregister[]>(url,search);
  }
}
