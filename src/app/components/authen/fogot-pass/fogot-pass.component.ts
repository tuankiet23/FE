import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from './../../../models/employee';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fogot-pass',
  templateUrl: './fogot-pass.component.html',
  styleUrls: ['./fogot-pass.component.css']
})
export class FogotPassComponent implements OnInit {

  fogotForm!: FormGroup;
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8080/api/user/fogotpass';
  constructor(private rest: RestApiService,
     private data: DataService,
     private http:HttpClient,
     private router: Router,
     private Fb: FormBuilder,
     ) {
    this.employee = new Employee();
  }

  ngOnInit() {
    this.fogotForm = this.Fb.group({
      email: new FormControl('',[Validators.required,Validators.email]),

    });

  }
  validate() {
    return true;
  }
  fogotPass() {
    this.btnDisable = true;
    if (this.validate()) {
      this
        .put(this.url, this.employee)
        .then((data) => {
          // this.data.success('Employee is save');
          alert("Vui lòng check email để lấy lại mật khẩu!");
          this.router.navigate(['/login'])
          this.btnDisable = false;

        })
        .catch((error) => {
          alert("Lấy lại mật khẩu thất bại vui lòng kiểm tra lại email!");

          this.data.error(error['message']);
          this.btnDisable = false;
        });
    }
  }

  put(link: string,body: any){

    return this.http.put(link +'/' ,body).toPromise();
  }
  get email() { return this.fogotForm.get('email'); }


}
