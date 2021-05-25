import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { EmpDashComponent } from './emp-dash/emp-dash.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'About', component: AboutComponent  },
  { path: 'AdminLogin', component: AdminloginComponent },
  { path: 'EmployeeLogin', component: EmploginComponent },
  { path: 'Contact', component: ContactComponent},
  { path: 'r',component: RegisterComponent,canActivate:[AuthGaurdService]},
  { path: 'viewemp',component: ViewEmpComponent,canActivate:[AuthGaurdService]},
  { path: 'editEmp',component: EditEmpComponent,canActivate:[AuthGaurdService]},
  { path: 'editEmp/:id',component: EditEmpComponent,canActivate:[AuthGaurdService]},
  { path: 'logout',component: LogoutComponent,canActivate:[AuthGaurdService]},
  { path: 'EmpDash',component: EmpDashComponent,canActivate:[AuthGaurdService]}
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminloginComponent,
    EmploginComponent,
    ContactComponent,
    IndexComponent,
    RegisterComponent,
    ViewEmpComponent,
    EditEmpComponent,
    LogoutComponent,
    EmpDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
