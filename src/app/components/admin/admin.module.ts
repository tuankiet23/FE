
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { ListJobregisterComponent } from './list-jobregister/list-jobregister.component';

import { CompanyAdComponent } from './company-ad/company-ad.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { HomeAdComponent } from './home-ad/home-ad.component';
import { AdminComponent } from './admin.component';
import { HeaderAdComponent } from './header-ad/header-ad.component';
import { EditAcademiclevelComponent } from './edit-academiclevel/edit-academiclevel.component';
import { AddJEComponent } from './add-je/add-je.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditJeComponent } from './edit-je/edit-je.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { JobRegisterComponent } from './job-register/job-register.component';
import { RouterModule, Routes } from '@angular/router';
import { ListJeComponent } from './list-je/list-je.component';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { JobComponent } from './job/job.component';

const Adminroutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path:'',
        component: HomeAdComponent,
        pathMatch:'full'
      },
      {
        path:'je',
        component: ListJeComponent,
        pathMatch:'full'
      },
      {
        path:'addJE',
        component: AddJEComponent,

        pathMatch:'full'
      },
      {
        path:'editJE/:id',
        component: EditJeComponent,

        pathMatch:'full'
      },
      {
        path:'user/create',
        component: CreateUserComponent,
        pathMatch:'full'
      },
      {
        path:'company',
        component: CompanyAdComponent,
        pathMatch:'full'
      },
      {
        path:'company/create',
        component: CreateCompanyComponent,
        pathMatch:'full'
      },
      {
        path:'academic/edit',
        component: EditAcademiclevelComponent,
        pathMatch:'full'
      },
      {
        path:'jobregister',
        loadChildren: () => import("src/app/components/admin/job-register/job-register.module").then(m => m.JobRegisterModule)
      },
      {
        path:'job',
        loadChildren: () => import("src/app/components/admin/job/job.module").then(m => m.JobModule)
      }
    ]
  },
]

@NgModule({
  declarations: [
    AdminComponent,
    HeaderAdComponent,
    SidebarComponent,
    EditAcademiclevelComponent,
    JobComponent,
  ],
  imports: [
    RouterModule.forChild(Adminroutes),
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    RouterModule
    // NgxPaginationModule,
  ],
  exports: [RouterModule],
})
export class AdminModule { }
