import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl = 'http://localhost:8080/api/user/upload/';
  constructor(private http: HttpClient) {}

  upload(file: any, id: any): Observable<any> {
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(`${this.baseApiUrl}${id}`, formData);
  }
}
