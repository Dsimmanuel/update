import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { RoutedetailsComponent } from './pages/routedetails/routedetails.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './admin/student/student.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DriverComponent } from './admin/driver/driver.component';
import { AdddriverComponent } from './admin/adddriver/adddriver.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { RouteadminComponent } from './admin/routeadmin/routeadmin.component';
import { ComplaintadminComponent } from './admin/complaintadmin/complaintadmin.component';
import { AddrouteComponent } from './admin/addroute/addroute.component';
import { Route1Component } from './admin/route1/route1.component';
import { Route2Component } from './admin/route2/route2.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'account',component:AccountComponent},
  {path:'route',component:RoutedetailsComponent},
  {path:'admin',component:SidebarComponent},
  {path:'student',component:StudentComponent},
  {path:'driver',component:DriverComponent},
  {path:'adddriver',component:AdddriverComponent},
  {path:'complaint',component:ComplaintComponent},
  {path:'routeDetails',component:RouteadminComponent},
  {path:'viewComplaint',component:ComplaintadminComponent},
  {path:'addRoute',component:AddrouteComponent},
  {path:'route1',component:Route1Component},
  {path:'route2',component:Route2Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
