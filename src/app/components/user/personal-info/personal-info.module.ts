import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailpersonalComponent } from "./detailpersonal/detailpersonal.component";
import { EditpersonalComponent } from "./editpersonal/editpersonal.component";
import { PersonalInfoRouting } from "./personalinfo.routing";

@NgModule({
    declarations:[ DetailpersonalComponent, EditpersonalComponent],
    imports: [ PersonalInfoRouting, FormsModule ],
    exports: [],
    providers: []
})
export class PersonalInfoModule{}
