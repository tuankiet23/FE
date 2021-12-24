import { status_job } from './status_job';
import { job_position } from './job_position';
export interface job {
    id: number ;
    job_name: string;
    job_position: job_position ;
    number_experience: number ;
    method_work_id: number ;
    address_work: string ;
    academic_level_id: number ;
    level_id: number;
    qty_person: number;
    due_date: Date;
    skill: string ;
    description: string ;
    interrest: string ;
    salary:number
    contact_id: number;
    job_status_id: status_job;
    views:number;
    create_id:number;
    is_delete:number;
}
