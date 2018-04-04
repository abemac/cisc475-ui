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
  loggingin:boolean =false;
  shakegroup = ""
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
  onLoginClick(){
    this.loggingin=true;
    this.http.get<any>('/api/now/table/x_197846_global_token').toPromise().then(
      resp=>{
        var valid=false;
        for(let user of resp.result){
          if (this.username == user.username && this.password==user.password){
            valid=true;
            break;
          }
        }
        
        if(!valid){
          console.log("Incorrect Login")
          this.loggingin=false;
          this.shakegroup="shake"
          this.password=""
          setTimeout(()=>{this.shakegroup=""},1000)
        }
        if(valid){
          console.log("Logging in "+this.username)
          this.loggingin=false;
          this.loggedIn.emit("loggedin")
          
        }
      }
    )
  
    
  }

}
