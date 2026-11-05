import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrl: './resume-upload.component.css'
})

export class ResumeUploadComponent {

 selectedFile:any;

 onFileSelected(event:any){

   this.selectedFile =
   event.target.files[0];

 }

 uploadResume(){

   alert('Resume Uploaded');

 }

}