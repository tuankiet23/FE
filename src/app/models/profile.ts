
import { academic_level } from "./academic_level";
import { user } from "./user";

export interface profile{
    id: number ;
    user: user;
    academic_level: academic_level;
    skill: string;
    desired_salary: string;
    desired_working_address: string;
    years_experience: string;
    is_delete: number
}