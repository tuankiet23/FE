import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobModel } from '../components/user/home/JobModel';


@Injectable({
  providedIn: 'root'
})
export class HomeUserService {

  private urlBase =  environment.apiBaseUrl;
  url : string = this.urlBase + '/user/job/home-page'
  urlSearch: string = this.urlBase + '/user/job/home-page/search?page-number=1&page-size=1'

  constructor(private http: HttpClient) { }

   getJob(modjob: number, pageNumber:number, pageSize:number): Observable<JobModel[]> {
    return this.http.get<JobModel[]>(this.url + '?modjob='+modjob+'&startrow='+pageNumber + '&endrow='+pageSize).pipe();
  }
  // modelJobVM : Se

  searchJobHomePage(searchJobForm : FormGroup, pageNumber:number, pageSize:number): Observable<JobModel[]> {

    return this.http.put<JobModel[]>(this.urlSearch, searchJobForm)
  }

  // public getJob(modjob: number, startrow:number, endrow:number): Observable<job[]> {
  //   return this.http.get<any>(this.url + '?modjob='+modjob+'&startrow='+startrow + '&endrow='+endrow).pipe(
  //     tap(newjob => console.log(`receivedJob=${JSON.stringify(newjob)}`))
  //   );
  // }
}
