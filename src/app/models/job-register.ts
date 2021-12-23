import { job } from "./job";
import { profilestatus } from "./profilestatus";
import { user } from "./user";

export interface jobregister {
    id: number ;
    job: job;
    user: user;
    profilestatus: profilestatus;
    dateregister: Date;
    dateinterview:Date;
    methodinterview: string;
    cv: string;
    reason: string;
    is_delete:number;
}