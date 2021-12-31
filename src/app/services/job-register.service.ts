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

  public getJobRegister( currentPage: number, pageSize:number): Observable<jobregister[]> {
    return this.http.get<any>(`${this.apiServerUrl}/user/jobregister/${currentPage}/${pageSize}`).pipe(
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
    return this.http.post<addjobregister>(url, jobregister).pipe(
      tap(notyfy => alert("Cập nhật thành công")))
  }

  public delete(id: number): Observable<jobregister> {
    const url = `${this.apiServerUrl}` + "/user/jobregister/" + `${id}`
    return this.http.delete<any>(url).pipe(
      tap(notyfy => console.log("xóa thàng công"))
    )
  }

  public getAllJobregister(pageN: number, pageS: number): Observable<jobregister[]> {
    const url = `${this.apiServerUrl}` + "/user/jobregister/" + `${pageN}` + "/" + `${pageS}`
    return this.http.get<jobregister[]>(url);
  }

  public getSearchJobRegister(search: searchJobRegister,currentPage: number, pageSize: number ): Observable<jobregister[]> {
    const url = `${this.apiServerUrl}` + "/user/jobregister/search"+`?pageIndex=${currentPage}&pageSize=${pageSize}`
    return this.http.put<jobregister[]>(url, search);
  }
  public dowloadcv(id: number) : Observable<Blob>{
    const url = `${this.apiServerUrl}` + "/user/jobregister/download/" + `${id}`
    return this.http.get(url, {responseType: 'blob'}).pipe(
      tap(notyfy => alert("Dowload cv thành công")))
  }
}
