import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EditJobRegisterComponent } from "./edit-job-register/edit-job-register.component";
import { JobRegisterComponent } from "./job-register.component";
import { ListJobRegisterComponent } from "./list-job-register/list-job-register.component";
import { DetailJobRegisterComponent } from './detail-job-register/detail-job-register.component';
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";


const JobRegisterRoutes: Routes = [
    {
        path: '',
        component: JobRegisterComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'list',
                component: ListJobRegisterComponent
            },
            {
                path: 'edit/:id',
                component: EditJobRegisterComponent
            },
            {
                path: 'detail/:id',
                component: DetailJobRegisterComponent
            },
        ]
    }
];
@NgModule({
    declarations: [
        JobRegisterComponent, 
        ListJobRegisterComponent, 
        EditJobRegisterComponent, 
        DetailJobRegisterComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(JobRegisterRoutes),
        NgxPaginationModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
    ],
    
    exports: [RouterModule],
    providers: []
})
export class JobRegisterModule { }