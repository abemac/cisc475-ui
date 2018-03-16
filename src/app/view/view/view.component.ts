import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  reagants: any;

  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.http.get<any>('/api/now/table/x_197846_team_nan_reagent').subscribe( res => {
      this.reagants = res.result.map( reagant => {
        reagant.sys_created_on = new Date(reagant.sys_created_on);
        return reagant;
      });
    });
  }

}
