import { NgModule } from "@angular/core";
import { DetailpersonalComponent } from "./detailpersonal/detailpersonal.component";
import { EditpersonalComponent } from "./editpersonal/editpersonal.component";
import { PersonalInfoRouting } from "./personalinfo.routing";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[ DetailpersonalComponent, EditpersonalComponent],
    imports: [ PersonalInfoRouting, FormsModule ],
    exports: [],
    providers: []
})
export class PersonalInfoModule{}