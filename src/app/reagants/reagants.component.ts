import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AddReagantComponent} from './add/add.component'
import {EditReagantComponent} from './edit/edit.component'
@Component({
  selector: 'app-reagants',
  templateUrl: './reagants.component.html',
  styleUrls: ['./reagants.component.css']
})
export class ReagantsComponent implements OnInit {

  reagants : Array<any>;
  reagantsUnfiltered : Array<any>=new Array<any>();
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
      this.reagantsUnfiltered=new Array<any>(this.reagants)
      console.log("here")
      console.log(this.reagantsUnfiltered)
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
    const modalRef = this.modalService.open(EditReagantComponent)
    modalRef.componentInstance.name = reagant.name;
    modalRef.componentInstance.puritylevel = reagant.puritylevel;
    modalRef.componentInstance.grade = reagant.grade;
    modalRef.componentInstance.sysid = reagant.sys_id;
    modalRef.result.then(()=>{
      this.updateTable()
    });
   
  }

  add(){
    const modalRef = this.modalService.open(AddReagantComponent).result.then(()=>{
      this.updateTable()
    })
  }
  refresh(){
    this.updateTable()
  }

  searchString:string;
  onSearchChange(event){
    // console.log(this.reagantsUnfiltered[0].filter(r => String(r.name).startsWith(this.searchString)))
    // console.log(this.reagants)
    // console.log(this.reagantsUnfiltered)
    this.reagants=this.reagantsUnfiltered[0].filter(r => String(r.name).toUpperCase().includes(this.searchString.toUpperCase()))
    
  }


}
