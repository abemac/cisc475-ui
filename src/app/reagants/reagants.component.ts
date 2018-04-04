import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reagants',
  templateUrl: './reagants.component.html',
  styleUrls: ['./reagants.component.css']
})
export class ReagantsComponent implements OnInit {

  reagants: any;
  deleting: Map<number,boolean> = new Map<number,boolean>();
  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.updateTable()
  }
  updateTable(){
    this.http.get<any>('/api/now/table/x_197846_team_nan_reagent').subscribe( res => {
      this.reagants = res.result.map( reagant => {
        reagant.sys_created_on = new Date(reagant.sys_created_on);
        return reagant;
      });
    });
  }
  delete(id){
    this.deleting.set(id,true);
    console.log(id)
    this.http.delete('/api/now/table/x_197846_team_nan_reagent/'+String(id)).subscribe(resp=>{
      this.updateTable();
    })
  }

}
