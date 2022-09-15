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
  {path:'addRoute',component:RouteadminComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
