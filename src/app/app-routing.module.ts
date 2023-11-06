import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeProComponent } from './page-home-pro/page-home-pro.component';
import { AboutPageProComponent } from './about-page-pro/about-page-pro.component';
import { DiagnosePageProComponent } from './diagnose-page-pro/diagnose-page-pro.component';
import { ContactUsPageProComponent } from './contact-us-page-pro/contact-us-page-pro.component';
import { AdminPageProComponent } from './admin-page-pro/admin-page-pro.component';
import { LoginPageProComponent } from './login-page-pro/login-page-pro.component';
import { AuthGuard } from './AuthGuard';
import { LogoutPageProComponent } from './logout-page-pro/logout-page-pro.component';
import { ReportPageProComponent } from './report-page-pro/report-page-pro.component';

const routes: Routes = [
  { path: '', component: PageHomeProComponent },
  { path: 'app-page-home-pro', component: PageHomeProComponent },
  { path: 'app-about-page-pro', component: AboutPageProComponent },
  { path: 'app-diagnose-page-pro', component: DiagnosePageProComponent },
  { path: 'app-contact-us-page-pro', component: ContactUsPageProComponent },
  { path: 'app-admin-page-pro', component: AdminPageProComponent ,canActivate: [AuthGuard] },
  { path: 'app-login-page-pro', component: LoginPageProComponent},
  { path: 'app-logout-page-pro', component: LogoutPageProComponent ,canActivate: [AuthGuard] },
  { path: 'app-report-page-pro', component: ReportPageProComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
