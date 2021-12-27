import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobModel } from '../components/user/home/JobModel';
import { AdminDashboardLineChart } from '../models/AdminDashboardLineChart';
import { AdminDashboardPieChart } from '../models/AdminDashboardPieChart';


@Injectable({
  providedIn: 'root'
})
export class HomeAdminService {

  private urlBase = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // getStatisticNumbers(fromDateStr: string, toDateStr: string): Observable<JobModel[]> {
  //   return this.http.get<JobModel[]>(this.urlBase + `/admin/dashboard/statistics?from-date=${fromDateStr}&to-date=${toDateStr}`).pipe();
  // }
  
  getLineChartData(fromDateStr: string, toDateStr: string, dateType: string): Observable<AdminDashboardLineChart> {
    return this.http.get<AdminDashboardLineChart>(this.urlBase + `/admin/dashboard/linechart?from-date=${fromDateStr}&to-date=${toDateStr}&type-time=${dateType}`).pipe();
  }
  
  getPieChartData(fromDateStr: string, toDateStr: string): Observable<AdminDashboardPieChart> {
    return this.http.get<AdminDashboardPieChart>(this.urlBase + `/admin/dashboard/piechart?from-date=${fromDateStr}&to-date=${toDateStr}`).pipe();
  }

}
