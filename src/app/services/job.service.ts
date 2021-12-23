import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { job } from '../models/job';
import { catchError, from, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getJob(): Observable<job[]> {
    return this.http.get<any>(`${this.apiServerUrl}/user/job`).pipe(
      tap(receivedJob => console.log(`receivedJob=${JSON.stringify(receivedJob)}`))
    );
  }

  public getJobById(id: number): Observable<any> {
    const url = `${this.apiServerUrl}` + "/user/job/" + `${id}`
    return this.http.get<any>(url).pipe(
      tap(receivedJob => console.log(`receivedJob=${JSON.stringify(receivedJob)}`))
    );

  }
  public addJob(formRequest:job): Observable<job[]>{
    return this.http.post<job[]>(this.apiServerUrl + "/user/job/add" , formRequest);
  }

}
