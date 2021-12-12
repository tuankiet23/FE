import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, retry } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { academic_level } from "../models/academic_level";
import { API_VERIFY_ACCOUNT } from "../models/config/api-paths";
import { USERNAME_KEY, USER_ID_KEY, USER_ROLE_KEY, USER_TOKEN_KEY } from "../models/config/local-storage-keys";
import { LoginRequestModel } from "../models/login-request.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService {
    constructor(
        private http: HttpClient
    ) {

    }

    login(loginRequest: LoginRequestModel): Observable<any> {
        return this.http.post(`${environment.auth_url}/login`, loginRequest).pipe(
            retry(2),
            catchError(err => {
                return throwError(err);
            })
        );
    }

    logout(): void {
        localStorage.removeItem(USER_ID_KEY);
        localStorage.removeItem(USER_ROLE_KEY);
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(USER_TOKEN_KEY);
    }

    isLoggedIn(): boolean {
        return localStorage.getItem(USER_ID_KEY) != null;
    }

    activatedAccount(confirmationToken: string): Observable<any> {
        return this.http.get(`${API_VERIFY_ACCOUNT}/${confirmationToken}`);
    }

    // changePassword(passwords: ChangePasswordModel) {
    //     return this.http.post(`${environment.auth_url}/change-password/` + localStorage.getItem(USERNAME_KEY), passwords)
    //         .pipe(
    //             retry(2),
    //             catchError(err => {
    //                 return throwError(err);
    //             })
    //         );
    // }

    addByAdmin(academic: academic_level) {
        return this.http.post(`http://localhost:8080/api/user`, academic)
            .pipe(
                retry(2),
                catchError(err => {
                    return throwError(err);
                })
            );
    }

    // addByAdmin(empAdd: EmployeeAddModel)  {
    //     return this.http.post(`${environment.auth_url}/add`, empAdd)
    //         .pipe(retry(2)),
    //         catchError(err => {
    //             return throwError(err);
    //         });
    // }

}
