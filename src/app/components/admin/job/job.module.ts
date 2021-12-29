import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
 import {  MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatRadioModule} from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { JobComponent } from './job.component';
import { JobDetailComponent } from '../../user/job-detail/job-detail.component';
import { JobAdDetailComponent } from './job-ad-detail/job-ad-detail.component';
import { CreaterJobComponent } from './creater-job/creater-job.component';
import { ListJobComponent } from './list-job/list-job.component';


const JobRoutes: Routes = [
    {
        path: '',
        component: JobComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'list',
                component: ListJobComponent
            },
            {
                path: 'detail/:id',
                component: JobAdDetailComponent
            },
            {
                path: 'creater',
                component: CreaterJobComponent
            },
        ]
    }
];
@NgModule({
    declarations: [
        JobAdDetailComponent,
        CreaterJobComponent,
        ListJobComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(JobRoutes),
        NgxPaginationModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatButtonToggleModule,
        MatRadioModule

    ],

    exports: [RouterModule],
    providers: []
})
export class JobModule { }
