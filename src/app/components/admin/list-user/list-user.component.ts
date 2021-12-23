import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from './../../../models/employee';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  showDirectionLinks = true;
  addForm!: FormGroup;

  btnDisable = false;
  constructor(private EmployeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private rest: EmployeeService,
    private data: DataService,
    private http: HttpClient,
    private Fb: FormBuilder) {
    // this.paginator =Object.create(null)
  }
  // data:any

  displayedColumns: string[] = [
    'id',
    'fullName',
    'email',
    'userName',
    'password',
    'phoneNumber',
    'homeTown',
    'gender',
    'birthDay',
    'is_active',
  ];

  public employees: Array<any> = [];
  dataSource: Employee[] = [];
  totalRecord: number = 0;
  currentPage: number = 0;
  pageN: number = 0;
  pageS: number = 0;

  // dataSource = Object.create(null)
  ngOnInit(): void {
    // this.loaddata();
    this.EmployeeService.getAllUser().subscribe((data) => {
      this.employees = data;

      console.log(this.employees);
    });
  }
  deleteJE(id: number) {

    this.btnDisable = true;

    // debugger;
    this.rest.deleteJE(id).subscribe(data => {

      this.data.success('Employee is save');
      alert('xoa thanh cong');
      this.btnDisable = false;

    },
    // error => console.log(error)
    );
  }

}
