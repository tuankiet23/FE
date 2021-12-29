import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from './../../../services/users.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('uploadAvatar')
  uploadAvatar: ElementRef;
  loading: boolean = false; // Flag variable
  file: File;
  name: any;
  constructor( private restapi: RestApiService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("username");
  }

  onLogout() {
    this.restapi.logout()
  }
  onChange(event: any, id: any) {
    this.file = event.target.files[0];

    this.loading = !this.loading;
    console.log(event.target.files[0]);
    this.userService
      .upload(event.target.files[0], id)
      .subscribe((event: any) => {
        if (typeof event === 'object') {
          // Short link via api response
          // this.shortLink = event.link;

          this.loading = false; // Flag variable
        }
      });
  }
}
