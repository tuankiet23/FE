import { academic_level } from "./academic_level";
import { job_position } from "./job_position";
import { level_rank } from "./level_rank";
import { method_work } from "./method_work";
import { status_job } from "./status_job";
import { user } from "./user";

export interface job {
    id: number ;
    jobName: string;
    jobPosition: job_position ;
    numberExperience: number ;
    method_work: method_work ;
    addressWork: string ;
    academic_level: academic_level ;
    levelRank: level_rank;
    qtyPerson: number;
    createrte_date: Date;
    dueDate: Date;
    skills: string ;
    start_recruitment_date: Date;
    description: string ;
    interrest: string ;
    salaryMax:number
    salaryMin:number
    contact: user;
    statusJob: status_job;
    views:number;
    creater:user;
    is_delete:number;
}