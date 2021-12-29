import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransfereServiceService } from 'src/app/services/transfere-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  data = this.transfereService.getData();
  username: string = this.data.username;
  jobid = this.data.jobid;

  private urlBase =  environment.apiBaseUrl;
  url : string = this.urlBase + '/user/upload?username='+ this.username + '&jobid='+ this.jobid;

  constructor(private http: HttpClient, private transfereService :TransfereServiceService ) { }

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
