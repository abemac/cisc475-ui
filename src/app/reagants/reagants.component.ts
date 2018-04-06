import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AddComponent} from '../add/add.component'
import {EditComponent} from '../edit/edit.component'
@Component({
  selector: 'app-reagants',
  templateUrl: './reagants.component.html',
  styleUrls: ['./reagants.component.css']
})
export class ReagantsComponent implements OnInit {

  reagants: any;
  deleting: Map<number,boolean> = new Map<number,boolean>();
  refreshing:boolean=false;
  constructor(private http: HttpClient,private modalService: NgbModal) { }
  

  ngOnInit() {
    this.updateTable()
  }
  updateTable(){
    this.refreshing=true;
    this.http.get<any>('/api/now/table/x_197846_team_nan_reagent').subscribe( res => {
      this.reagants = res.result.map( reagant => {
        reagant.sys_created_on = new Date(reagant.sys_created_on);
        return reagant;
      });
      this.refreshing=false;
    });
  }
  delete(id){
    this.deleting.set(id,true);
    console.log(id)
    this.http.delete('/api/now/table/x_197846_team_nan_reagent/'+String(id)).subscribe(resp=>{
      this.updateTable();
    })
  }
  edit(reagant){
    console.log(reagant)
    const modalRef = this.modalService.open(EditComponent)
    modalRef.componentInstance.name = reagant.name;
    modalRef.componentInstance.puritylevel = reagant.puritylevel;
    modalRef.componentInstance.grade = reagant.grade;
    modalRef.componentInstance.sysid = reagant.sys_id;
    modalRef.result.then(()=>{
      this.updateTable()
    });
   
  }

  add(){
    const modalRef = this.modalService.open(AddComponent).result.then(()=>{
      this.updateTable()
    })
  }
  refresh(){
    this.updateTable()
  }
}
