import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css'],
})
export class CreateJobComponent implements OnInit {
  jobs: FormGroup;
  name: string = Object.create(null);
  btnDisabled = false;
  constructor(
    private JobService: JobService,
    private data: DataService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

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
      job_status_id: new FormControl(''),
      level_id: new FormControl(''),
      creater_id: new FormControl(''),
    });
  }

  onSave() {
    debugger;
    this.btnDisabled = true;

    this.JobService.addJob(this.jobs.value).subscribe((data) => {
      alert('thêm thành công')
      this.btnDisabled = false;
      console.log(data);
    });
  }
}
