import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Output() cancelInfo = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.cancelInfo.emit(false) ;
  }

}
