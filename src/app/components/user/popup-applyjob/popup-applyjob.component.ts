import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfereServiceService } from 'src/app/services/transfere-service.service';

@Component({
  selector: 'app-popup-applyjob',
  templateUrl: './popup-applyjob.component.html',
  styleUrls: ['./popup-applyjob.component.css']
})
export class PopupApplyjobComponent implements OnInit {
  data = this.transfereService.getData();

  constructor(
    private transfereService:TransfereServiceService,
    private router:Router) {
       if(this.data){
        console.log(this.data);
        console.log("jobid" + this.data.jobid);
       }
       else{
        //  this.router.navigateByUrl('/sender');
       }
    }

  ngOnInit(): void {
  }

}
