import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, Location } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SnowInterceptor } from './services/snow.interceptor';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReagantsComponent } from './reagants/reagants.component';
import { OrdersComponent } from './orders/orders.component';
import { BottlesComponent } from './bottles/bottles.component';
import { AddReagantComponent } from './reagants/add/add.component';
import { EditReagantComponent } from './reagants/edit/edit.component';
import { AddBottleComponent } from './bottles/add/add.component';
import { EditBottleComponent } from './bottles/edit/edit.component';
import { AddOrderComponent } from './orders/add/add.component';
import { EditOrderComponent } from './orders/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ReagantsComponent,
    AddReagantComponent,
    EditReagantComponent,
    AddBottleComponent,
    EditBottleComponent,
    AddOrderComponent,
    EditOrderComponent,
    BottlesComponent,
    OrdersComponent
  ],
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  entryComponents: [AddReagantComponent,EditReagantComponent,AddBottleComponent,EditBottleComponent,
                        AddOrderComponent,EditOrderComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SnowInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
