import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  infoMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode ;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
  infoToggle() {
    this.infoMode = !this.infoMode ;
  }

  cancelInfoMode(event: boolean) {
    this.infoMode = event;
  }

}