import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { Router } from '@angular/router';
import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';
import { USER_ROLE_KEY } from 'src/app/models/config/local-storage-keys';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8080/login';
  constructor(private rest: RestApiService, private data: DataService,private router:Router) {
    this.employee = new Employee();
  }

  ngOnInit(): void {}
  validate() {
    return true;
  }
  async login() {
    this.btnDisable = true;
    if (this.validate()) {
      this.rest
        .post(this.url, this.employee)
        .then((data) => {
          console.log(data)
          let value = data as{employeeId:string, token: string, rollId: string};
          localStorage.setItem('token',value.token);
          localStorage.setItem(USER_ROLE_KEY, value.rollId)
         // await this.data.getProfile();
          console.log(value.rollId);
          this.router.navigate([''])
        })
        .catch((error) => {
          this.data.error(error['error']);
          this.btnDisable = false;
        });
    }
  }

}
