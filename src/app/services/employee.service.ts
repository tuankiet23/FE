import { Injectable } from '@angular/core';
import { Employee } from './../models/employee';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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

  public deleteJE(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.API_URL + 'delete', employee);
  }

  public updateJE(employee: Employee, id: number): Observable<Employee[]> {
    return this.http.put<Employee[]>(this.API_URL + 'updateJE/' + id, employee);
  }

  public getEmployeeById(id: number) {
    return this.http.get<Employee>(this.API_URL + 'getje/' + id);
  }
}