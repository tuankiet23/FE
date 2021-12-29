// import { Injectable } from '@angular/core';
import { Employee } from './../models/employee';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { searchJE } from '../models/searchje';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private API_URL = 'http://localhost:8080/api/admin/';

  public getAllJe(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL + 'getallje');
  }


  public addJE(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.API_URL + 'singupje', employee);
  }
  public addUser(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>( 'http://localhost:8080/signup', employee);
  }

  public deleteJE(id: number): Observable<string> {
    return this.http.delete<string>(this.API_URL + 'delete/' + id );
  }

  public updateJE(employee: Employee, id: number): Observable<Employee[]> {
    return this.http.put<Employee[]>(this.API_URL + 'updateJE/' + id, employee);
  }

  public activeJE(id: number): Observable<string> {
    return this.http.delete<string>(this.API_URL + 'active/' + id );
  }


  // public getAllUser(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.API_URL + 'getallUser');
  // }
  public getEmployeeById(id: number) {
    return this.http.get<Employee>(this.API_URL + 'getje/' + id);
  }

  public getSearchJE(search: searchJE,currentPage: number, pageSize: number ): Observable<Employee[]> {
    const url = this.API_URL + "search"+`?pageIndex=${currentPage}&pageSize=${pageSize}`
    return this.http.put<Employee[]>(url, search);
  }
}
