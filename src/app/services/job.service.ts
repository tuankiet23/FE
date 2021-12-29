import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { job } from '../models/job';
import { catchError, from, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { searchJob } from '../models/job/searchjob';
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



  public getJobAd(id: number): Observable<any> {
    const url = `${this.apiServerUrl}` + "/user/job/detail/" + `${id}`
    return this.http.get<any>(url)
  }

  public getSearchJob(search: searchJob,currentPage: number, pageSize: number ): Observable<job[]> {
    const url = `${this.apiServerUrl}` + "/user/job/search"+`?pageIndex=${currentPage}&pageSize=${pageSize}`
    return this.http.put<job[]>(url, search);
  }


}
