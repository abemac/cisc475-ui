import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loggedIn= new EventEmitter();
  username:any;
  password:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
  onLoginClick(){
    
    this.loggedIn.emit("loggedin")
  }

}
