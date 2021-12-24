import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { DetailpersonalComponent } from "./detailpersonal/detailpersonal.component";
import { EditpersonalComponent } from "./editpersonal/editpersonal.component";
import { PersonalInfoComponent } from "./personal-info.component";

const persionalinfoRoutes: Routes = [
    {
        path: '',
        data: {pageTitle: 'Employee'},
        component: PersonalInfoComponent,
        children: [
            {
                path: '',
                redirectTo: 'detail/:id',
                pathMatch: 'full',
            },
            {
                path: 'detail/:id',
                component: DetailpersonalComponent
            },
            {
                path: 'edit/:id',
                component: EditpersonalComponent
            },
        ]
    }
];

export const PersonalInfoRouting: ModuleWithProviders = RouterModule.forChild(persionalinfoRoutes);
