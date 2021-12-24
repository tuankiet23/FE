import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { profile } from 'src/app/models/profile';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
  selector: 'app-detailpersonal',
  templateUrl: './detailpersonal.component.html',
  styleUrls: ['./detailpersonal.component.css']
})
export class DetailpersonalComponent implements OnInit {
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
