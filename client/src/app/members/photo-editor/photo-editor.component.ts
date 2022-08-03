import { Component, Input, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FileUploader } from 'ng2-file-upload';
import { Member } from 'src/app/_models/member';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() member: Member;
  uploader: FileUploader;
  hasBaseDropzoneOpver = false;
  baseURL = environment.apiUrl;

  constructor() { }

  ngOnInit(): void {
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseURL + "users/add-photo",
      authToken: 'Bearer'
    })
  }

}
