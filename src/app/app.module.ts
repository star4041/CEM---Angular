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

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'About', component: AboutComponent  },
  { path: 'AdminLogin', component: AdminloginComponent },
  { path: 'EmployeeLogin', component: EmploginComponent },
  { path: 'Contact', component: ContactComponent},
  { path: 'r',component: RegisterComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminloginComponent,
    EmploginComponent,
    ContactComponent,
    IndexComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
