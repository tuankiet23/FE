import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from 'src/app/services/profiles.service';
import { profile } from 'src/app/models/profile';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  [x: string]: any;
  public profile: any ;

  constructor(private profileservice: ProfilesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProfileById();
  }

  public getProfileById(): void{
    const id= this.route.snapshot.params['id'];
      this.profileservice.getProfileById(id).subscribe(
        (Response: profile )=>{
          this.profile=Response;
           console.log(this.profile);
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      );
    }

    public updateProfile(profile: profile): void {
      this.profileservice.updateProfile(profile).subscribe(
        (response: profile) => {
          console.log(response);
          this.getProfileById();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
}
