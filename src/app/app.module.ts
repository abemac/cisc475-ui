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
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: '404', component: NotFoundComponent },
//   { path: '*', redirectTo: '404' },
//   { path: '**', redirectTo: '404' }
// ];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ReagantsComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SnowInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
