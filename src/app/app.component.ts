import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  branding = 'LIMS Management System';
  loggedIn=false;

  constructor(
  ) { }

  ngOnInit() {
    document.title = this.branding;
  }
  onLogin(){
    this.loggedIn=true;
  }
}
