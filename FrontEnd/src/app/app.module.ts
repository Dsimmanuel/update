import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutedetailsComponent } from './pages/routedetails/routedetails.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './admin/student/student.component';
import { DriverComponent } from './admin/driver/driver.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdddriverComponent } from './admin/adddriver/adddriver.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { RouteadminComponent } from './admin/routeadmin/routeadmin.component';
import { ComplaintadminComponent } from './admin/complaintadmin/complaintadmin.component';
import { AddrouteComponent } from './admin/addroute/addroute.component';
import { Route1Component } from './admin/route1/route1.component';
import { Route2Component } from './admin/route2/route2.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RoutedetailsComponent,
    AccountComponent,
    LoginComponent,
    StudentComponent,
    DriverComponent,
    SidebarComponent,
    AdddriverComponent,
    ComplaintComponent,
    FooterComponent,
    RouteadminComponent,
    ComplaintadminComponent,
    AddrouteComponent,
    Route1Component,
    Route2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
 
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
