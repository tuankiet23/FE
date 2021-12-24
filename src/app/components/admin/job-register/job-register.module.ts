import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditJobRegisterComponent } from "./edit-job-register/edit-job-register.component";
import { JobRegisterComponent } from "./job-register.component";

import { CommonModule } from "@angular/common";
// import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
                path: 'edit/:id',
                component: EditJobRegisterComponent
            },
        ]
    }
];
@NgModule({
    declarations: [
        JobRegisterComponent,
        EditJobRegisterComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(JobRegisterRoutes),
        // NgxPaginationModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatButtonToggleModule,

    ],

    exports: [RouterModule],
    providers: []
})
export class JobRegisterModule { }
