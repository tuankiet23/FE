import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addjobregister } from '../models/addjobregister';
import { jobregister } from '../models/job-register';
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

  public updateJobRegist(body: Object={}): Observable<addjobregister> {
    return this.http.put<addjobregister>(`${this.apiServerUrl}/user/jobregister`, body);
  }

  public delete(id: number): Observable<jobregister>{
    const url =  `${this.apiServerUrl}` + "/user/jobregister/" + `${id}`
    return this.http.delete<any>(url).pipe(
      tap(notyfy=>console.log("xóa thàng công"))
    )
  }
}
