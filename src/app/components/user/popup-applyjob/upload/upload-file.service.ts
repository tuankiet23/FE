import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  url : string = "http://localhost:8080/upload?username=kietpt&jobid=1"

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File):Observable<any> {

    const formdata: FormData = new FormData();

    formdata.append('file', file);
    console.log("file: " + file);
    console.log("formdata: " + formdata);

    return this.http.post(this.url, formdata)
  }

  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }
}
