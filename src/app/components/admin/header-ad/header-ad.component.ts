import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-header-ad',
  templateUrl: './header-ad.component.html',
  styleUrls: ['./header-ad.component.css']
})
export class HeaderAdComponent implements OnInit {

  constructor(
    private restapi: RestApiService,
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.restapi.logout()
  }
}
