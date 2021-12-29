import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfereServiceService } from 'src/app/services/transfere-service.service';
import { UploadFileService } from './upload/upload-file.service';

@Component({
  selector: 'app-popup-applyjob',
  templateUrl: './popup-applyjob.component.html',
  styleUrls: ['./popup-applyjob.component.css']
})
export class PopupApplyjobComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File | any;
  progress: { percentage: number } = { percentage: 0 };

  data = this.transfereService.getData();

  constructor(
    private transfereService:TransfereServiceService,
    private router:Router, private uploadService: UploadFileService) {
       if(this.data){
        console.log(this.data);
        console.log("jobid" + this.data.jobid);
       }
       else{
        //  this.router.navigateByUrl('/sender');
       }
    }
    data2: any = {

    }
    ngOnInit() {
      this.showhideUtility();
    }
    visible:boolean = false;
    showhideUtility(){
      debugger;
      if(this.data2 == null){
        this.visible =  false;
        }
        else{
          this.visible = true;
        }
    }

    selectFile(event: any) {
      console.log("is selected")
      this.selectedFiles = event.target.files;
    }

    upload() {
      console.log("is upload")
      this.currentFileUpload = this.selectedFiles.item(0);
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
        // event => {
        // if (event.type === HttpEventType.UploadProgress) {
        //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
        // } else if (event instanceof HttpResponse) {
        //   console.log('File is completely uploaded!');
        // }
      // }
      );

      // this.selectedFiles = File;
    }
}
