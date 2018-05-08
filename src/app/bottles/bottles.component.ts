import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AddBottleComponent} from './add/add.component'
import {EditBottleComponent} from './edit/edit.component'
@Component({
  selector: 'app-bottles',
  templateUrl: './bottles.component.html',
  styleUrls: ['./bottles.component.css']
})
export class BottlesComponent implements OnInit {

  data : Array<any>;
  dataUnfiltered : Array<any>=new Array<any>();
  deleting: Map<number,boolean> = new Map<number,boolean>();
  refreshing:boolean=false;
  constructor(private http: HttpClient,private modalService: NgbModal) { }
  

  ngOnInit() {
    this.updateTable()
  }
  updateTable(){
    this.refreshing=true;
    this.http.get<any>('/api/now/table/x_197846_team_nan_reagentbottle').subscribe( res => {
      this.data = res.result.map( reagant => {
        reagant.sys_created_on = new Date(reagant.sys_created_on);
        return reagant;
      });
      this.dataUnfiltered=new Array<any>(this.data)
      console.log("here")
      console.log(this.dataUnfiltered)
      this.refreshing=false;
    });
  }
  delete(id){
    this.deleting.set(id,true);
    console.log(id)
    this.http.delete('/api/now/table/x_197846_team_nan_reagentbottle/'+String(id)).subscribe(resp=>{
      this.updateTable();
    })
  }
  edit(reagant){
    console.log(reagant)
    const modalRef = this.modalService.open(EditBottleComponent)
    modalRef.componentInstance.name = reagant.name;
    modalRef.componentInstance.puritylevel = reagant.purity_level;
    modalRef.componentInstance.grade = reagant.grade;
    modalRef.componentInstance.sysid = reagant.sys_id;
    modalRef.result.then(()=>{
      this.updateTable()
    });
   
  }

  add(){
    const modalRef = this.modalService.open(AddBottleComponent).result.then(()=>{
      this.updateTable()
    })
  }
  refresh(){
    this.updateTable()
  }

  searchString:string;
  onSearchChange(event){
    // console.log(this.dataUnfiltered[0].filter(r => String(r.name).startsWith(this.searchString)))
    // console.log(this.data)
    // console.log(this.dataUnfiltered)
    this.data=this.dataUnfiltered[0].filter(r => String(r.name).toUpperCase().includes(this.searchString.toUpperCase()))
    
  }


}
