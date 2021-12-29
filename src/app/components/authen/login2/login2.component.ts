import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { Employee } from './../../../models/employee';
import { USER_ROLE_KEY } from 'src/app/models/config/local-storage-keys';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loginForm: FormGroup=this.Fb.group({
      username: new FormControl(),
      password: new FormControl()
  })

  private apiServerUrl = environment.apiBaseUrl;
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8080/login';
  constructor(private rest: RestApiService, private data: DataService, private router: Router,
    public Fb: FormBuilder) {
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
        .post(this.url, this.loginForm.value)
        .then(data => {
          console.log(data)
          let value = data as { employeeId: string, token: string, username:string};
          localStorage.setItem('token', value.token);
          localStorage.setItem('username', value.username);
          alert("Đăng nhập thành công!")
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
            alert("Sai tài khoản hoặc mật khẩu!")
          }
        )
    }
  }
}
