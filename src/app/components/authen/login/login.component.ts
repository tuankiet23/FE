import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { Router } from '@angular/router';
import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';
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
          let value = data as { employeeId: string, token: string };
          localStorage.setItem('token', value.token);
          this.rest.get(`${this.apiServerUrl}/user/getProfile`).then((res) => {
            console.log(res)
            let value = res as any[];
            localStorage.setItem('user-role-key', value.toString())
          }
          )
          if(localStorage.getItem('user-role-key')=== 'ROLE_ADMIN'){
            this.router.navigate(['/admin'])
          }
         else{
            this.router.navigate([''])
          }

          
        }, 
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        )
    }
  }
}
