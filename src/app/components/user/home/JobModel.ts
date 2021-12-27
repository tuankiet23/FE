export class JobModel {
  id: number ;
  jobName: string;
  salary:number;
  jobPosition: {
    name : string;
  }
  addressWork: string;
  dueDate: string;
}
