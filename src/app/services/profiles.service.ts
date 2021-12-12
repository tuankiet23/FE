import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getProfileById(id: number): Observable<any> {
    const url = `${this.apiServerUrl}` + "/user/profile/" + `${id}`
    return this.http.get<any>(url).pipe(
      tap(receivedProfile => console.log(`receivedProfile=${JSON.stringify(receivedProfile)}`))
    );
  }

  public updateProfile(profile: profile): Observable<profile>{
    return this.http.post<profile>(`${this.apiServerUrl}/user/profile/`, profile);
  }

}
