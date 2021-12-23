import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  jobs: FormGroup;

  name:string = Object.create(null);
  btnDisabled = false;
  constructor(private JobService: JobService, private fb : FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.onSave();
  }

  public initForm() {
    this.jobs = this.fb.group({
      job_name: new FormControl(''),
      address_work: new FormControl(''),
      number_experience: new FormControl(''),
      interrest: new FormControl(''),
      qty_person: new FormControl(''),
      salary: new FormControl(''),
      skills: new FormControl(''),
      method_work_id: new FormControl(''),
      academic_level_id: new FormControl(''),
      job_position_id: new FormControl(''),
      start_recruitment_date: new FormControl(''),
      due_date: new FormControl(''),
      description: new FormControl(''),

    });
  }

  onSave() {
    this.JobService.addJob(this.jobs.value ).subscribe((data) => {
      console.log(data);
    });
  }

}
