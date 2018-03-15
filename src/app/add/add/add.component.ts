import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private puritylevel:any;
  private name:any;
  private grade:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  onAddReagant(){
    this.http.post('/api/now/table/x_197846_team_nan_reagent',"{'name':'"+this.name+"','grade':'"+this.grade+"','puritylevel':'"+this.puritylevel+"'}", this.httpOptions ).toPromise().then(resp=>{
      console.log(resp);
    },error=>{console.log(error)});
  }
}
