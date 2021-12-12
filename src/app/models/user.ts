import { role } from "./role";

export interface user{
    id: number;
    fullname: string;
    email: string;
    userName: string;
    password: string;
    phoneNumber: string;
    homeTown: string;
    gender: string;
    birthday: Date;
    isDelete: number;
    role: role;
    active: number;
    is_delete: number;
}