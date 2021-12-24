import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class HomeUserService {
  newjob : job;

  url : string = 'http://localhost:8080/api/user/job/home-page'
  // modjob:number = 0;
  // startrow:number = 0;
  // pagesize: number = 20;
  // endrow:number = this.startrow + this.pagesize;

  constructor(private http: HttpClient) { }

  public getJob(modjob: number, startrow:number, endrow:number): Observable<job[]> {
    return this.http.get<any>(this.url + '?modjob='+modjob+'&startrow='+startrow + '&endrow='+endrow).pipe(
      tap(newjob => console.log(`receivedJob=${JSON.stringify(newjob)}`))
    );
  }
}
