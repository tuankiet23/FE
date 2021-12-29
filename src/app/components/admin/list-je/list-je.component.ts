import { searchJE } from './../../../models/searchje';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from './../../../services/employee.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Employee } from './../../../models/employee';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-je',
  templateUrl: './list-je.component.html',
  styleUrls: ['./list-je.component.css']
})
export class ListJeComponent implements OnInit {

  searchForm: FormGroup = this.Fb.group({
    fullName: new FormControl(""),
    email: new FormControl(""),
    phoneNumber: new FormControl(""),

  })

  showDirectionLinks = true;
  addForm!: FormGroup;

  btnDisable = false;
  constructor(private EmployeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private rest: EmployeeService,
    private data: DataService,
    private http: HttpClient,
    private Fb: FormBuilder,
    private employeeService: EmployeeService

    ) {
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
  employee1: any;
  totalRecord: number = 0;
  // currentPage: number = 0;
  pageN: number = 0;
  pageS: number = 0;

  // dataSource = Object.create(null)
  ngOnInit(): void {
    // this.loaddata();
   this.getJE()
  }
  deleteJE(employee:any) {
    console.log("Truoc khi xoa")
    this.btnDisable = true;

    // debugger;
    this.rest.deleteJE(employee.id).subscribe(() => {
      alert('Đã vô hiệu xóa tài khoản');
      this.data.success('Employee is save');
      this.getJE()
      console.log("Sau khi xoa thanh cong")
      // this.EmployeeService.getAllJe()
      // this.router.navigate(['/admin/je'])

      this.btnDisable = false;

    },
    // error => console.log(error)
    );
  }
   activeJE(employee:any) {
    this.btnDisable = true;

    // debugger;
    this.rest.activeJE(employee.id).subscribe(() => {
      alert('Đã kích hoạt tài khoản');
      this.data.success('Employee is save');
      this.getJE()
      // this.EmployeeService.getAllJe()
      // this.router.navigate(['/admin/je'])

      this.btnDisable = false;

    },
    // error => console.log(error)
    );
  }
 getJE(){
  this.EmployeeService.getAllJe().subscribe((data: any[]) => {
    this.employees = data;

    console.log(this.employees);
  });
 }

 onSearchJE() {
  console.log(this.searchForm.value);

  this.employeeService.getSearchJE(this.searchForm.value, this.currentPage, this.pageSize).subscribe(
    res => {
      this.employees = res;
      console.log(this.searchForm.value);
      console.log(res);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}



 isLoading = false;
 totalRows = 3;
 pageSize = 1;
 currentPage = 1;
 pageSizeOptions: number[] = [1, 10, 25, 100];
 @ViewChild(MatPaginator)
 paginator!: any;
 ngAfterViewInit() {
   this.employee1.paginator = this.paginator;
 }
 pageChanged(event: PageEvent) {
   console.log({ event });
   this.pageSize = event.pageSize;
   this.currentPage = event.pageIndex;
  this.onSearchJE();
 }

}
