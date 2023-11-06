import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeProComponent } from './page-home-pro/page-home-pro.component';
import { AboutPageProComponent } from './about-page-pro/about-page-pro.component';
import { DiagnosePageProComponent } from './diagnose-page-pro/diagnose-page-pro.component';
import { ContactUsPageProComponent } from './contact-us-page-pro/contact-us-page-pro.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AdminPageProComponent } from './admin-page-pro/admin-page-pro.component';
import { LoginPageProComponent } from './login-page-pro/login-page-pro.component';
import { LogoutPageProComponent } from './logout-page-pro/logout-page-pro.component';
import { ReportPageProComponent } from './report-page-pro/report-page-pro.component';
@NgModule({
  declarations: [
    AppComponent,
    PageHomeProComponent,
    AboutPageProComponent,
    DiagnosePageProComponent,
    ContactUsPageProComponent,
    AdminPageProComponent,
    LoginPageProComponent,
    LogoutPageProComponent,
    ReportPageProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

],
  bootstrap: [AppComponent]
})
export class AppModule { }
