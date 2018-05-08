import { Component, OnInit,Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditOrderComponent implements OnInit {
  @Input() item;
  @Input() amount;
  @Input() requestor;
  @Input() sysid;
  adding:boolean=false;
  error:boolean=false;
  success:boolean=false;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient,public activeModal: NgbActiveModal) { }

  ngOnInit() {
    
  }
  close(){
    this.activeModal.close()
    console.log("closed")
  }
  onEditReagant(){
    this.adding=true;
    this.http.patch('/api/now/table/x_197846_team_nan_purchaseorders/'+this.sysid,
    "{'item':'"+this.item+
    "','amount':'"+this.amount+
    "','requestor':'"+this.requestor+"'}", this.httpOptions ).toPromise().then(resp=>{
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
