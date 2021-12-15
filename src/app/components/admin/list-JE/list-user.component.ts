import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employee.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  showDirectionLinks = true;
  addForm!: FormGroup;

  btnDisable = false;
  constructor(private employeeService: EmployeeService,
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
    this.employeeService.getAllJe().subscribe((data) => {
      this.employees = data;
      // this.dataSource = new MatTableDataSource<Employee>(data);
      console.log(this.employees);
    });
  }
  deleteJE() {
    // debugger;
    this.btnDisable = true;
    // console.log(this.addForm.value);

    this.rest.deleteJE(this.addForm.value).subscribe((data) => {
      this.data.success('Employee is save');
      this.btnDisable = false;
      console.log('xoa thanh cong');
    });
  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}
