import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private restapi: RestApiService,) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.restapi.logout()
  }
}
