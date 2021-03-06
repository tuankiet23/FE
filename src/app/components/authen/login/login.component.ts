import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { Employee } from './../../../models/employee';
import { USER_ROLE_KEY } from 'src/app/models/config/local-storage-keys';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private apiServerUrl = environment.apiBaseUrl;
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8080/login';
  constructor(private rest: RestApiService, private data: DataService, private router: Router) {
    this.employee = new Employee();
  }

  ngOnInit(): void { }
  validate() {
    return true;
  }
  login() {
    this.btnDisable = true;
    if (this.validate()) {
      this.rest
        .post(this.url, this.employee)
        .then(data => {
          console.log(data)
          let value = data as { employeeId: string, token: string, username:string};
          localStorage.setItem('token', value.token);
          localStorage.setItem('username', value.username);
          alert("Đăng nhập thành công!")
          this.rest.get(`${this.apiServerUrl}/user/getProfile`).then((res) => {
            console.log(res)
            let value = res as any[];
            if(value.toString()==='ROLE_ADMIN' || value.toString()==='ROLE_JE'){
              this.router.navigate(['/admin'])
            }
            else{
              this.router.navigate([''])
            }
            localStorage.setItem('user-role-key', value.toString())
          }
          )
        },
          (error: HttpErrorResponse) => {
            alert("Sai tài khoản hoặc mật khẩu!")
          }
        )
    }
  }
}
