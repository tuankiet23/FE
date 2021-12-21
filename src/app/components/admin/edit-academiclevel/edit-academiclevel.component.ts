import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { academic_level } from 'src/app/models/academic_level';

@Component({
  selector: 'app-edit-academiclevel',
  templateUrl: './edit-academiclevel.component.html',
  styleUrls: ['./edit-academiclevel.component.css']
})
export class EditAcademiclevelComponent implements OnInit {

  [x: string]: any;
  
  editForm!: FormGroup;
  academic: academic_level;
  constructor(
    private formBuilder: FormBuilder,
    ) {
      this.academic = new academic_level ();
   }

  ngOnInit(): void {  
  }



}
