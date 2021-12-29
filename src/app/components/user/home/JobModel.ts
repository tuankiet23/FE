export class JobModel {
  id: number ;
  jobName: string;
  salaryMax:number;
  salaryMin: number;
  jobPosition: {
    name : string;
  }
  addressWork: string;
  dueDate: string;
}
