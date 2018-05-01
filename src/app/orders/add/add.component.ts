import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-order',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddOrderComponent implements OnInit {
  puritylevel:any;
  name:any;
  grade:any;
  adding:boolean=false;
  error:boolean=false;
  success:boolean=false;
  constructor(private http: HttpClient,public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  close(){
    this.activeModal.close()
    console.log("closed")
  }
  onAddReagant(){
    this.adding=true;
    this.http.post('/api/now/table/x_197846_team_nan_reagent',"{'name':'"+this.name+"','grade':'"+this.grade+"','puritylevel':'"+this.puritylevel+"'}", this.httpOptions ).toPromise().then(resp=>{
      console.log(resp);
      this.adding=false;
      this.success=true;
      this.error=false;
    },error=>{
      console.log(error);
      this.adding=false;
      this.success=false;
      this.error=true;
    });
  }
}
