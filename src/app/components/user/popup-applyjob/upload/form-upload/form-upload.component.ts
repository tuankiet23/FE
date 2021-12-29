import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File | any;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }
  data: any = {

  }
  ngOnInit() {
    this.showhideUtility();
  }
  visible:boolean = false;
  showhideUtility(){
    debugger;
    if(this.data == null){
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
