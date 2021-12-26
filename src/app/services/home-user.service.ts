import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobModel } from '../components/user/home/JobModel';


@Injectable({
  providedIn: 'root'
})
export class HomeUserService {

  private urlBase =  environment.apiBaseUrl;
  url : string = this.urlBase + '/user/job/home-page'

  // modjob:number = 0;
  // startrow:number = 0;
  // pagesize: number = 20;
  // endrow:number = this.startrow + this.pagesize;

  constructor(private http: HttpClient) { }

   getJob(modjob: number, startrow:number, endrow:number): Observable<JobModel[]> {
    return this.http.get<JobModel[]>(this.url + '?modjob='+modjob+'&startrow='+startrow + '&endrow='+endrow).pipe();
  }

  // public getJob(modjob: number, startrow:number, endrow:number): Observable<job[]> {
  //   return this.http.get<any>(this.url + '?modjob='+modjob+'&startrow='+startrow + '&endrow='+endrow).pipe(
  //     tap(newjob => console.log(`receivedJob=${JSON.stringify(newjob)}`))
  //   );
  // }
}
