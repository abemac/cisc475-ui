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
import { ViewComponent } from './view/view/view.component';
import { AddComponent } from './add/add/add.component';
import { LoginComponent } from './login/login/login.component';
import { UpdateComponent } from './update/update/update.component';
import { DeleteComponent } from './delete/delete/delete.component';

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
    ViewComponent,
    AddComponent,
    LoginComponent,
    UpdateComponent,
    DeleteComponent
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
