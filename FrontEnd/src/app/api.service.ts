import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  pdata:any=[]

  constructor(
    private http:HttpClient) { }

  savedriver(i:any){
     this.pdata = i
  }
  receivedata(){
    return this.pdata
  }


  adduser=(user:any)=>{
    return this.http.post<any>("http://localhost:3000/register",user)
  }

  viewuser=()=>{
    return this.http.get<any>("http://localhost:3000/home")
  }
  deleteuser=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/delete/"+id)
  }

  updateuser=(user:any)=>{
    return this.http.put<any>("http://localhost:3000/update/"+user._id,user)
  }

  //driver

  adddriver=(driver:any)=>{
    return this.http.post<any>("http://localhost:3000/addDriver",driver)
  }

  viewdriver=()=>{
    return this.http.get<any>("http://localhost:3000/viewDriver")
  }
  deletedriver=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/deleteDriver/"+id)
  }

  updatedriver=(driver:any)=>{
    return this.http.put<any>("http://localhost:3000/updateDriver/"+driver._id,driver)
  }

  //route
  addroute=(route:any)=>{
    return this.http.post<any>("http://localhost:3000/addRoute",route)
  }

  viewRoute=()=>{
    return this.http.get<any>("http://localhost:3000/viewRoute")
  }
  deleteroute=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/deleteRoute/"+id)
  }

  updateroute=(driver:any)=>{
    return this.http.put<any>("http://localhost:3000/updateRoute/"+driver._id,driver)
  }



  //BoardingPoint

  addbpoint=(bpoint:any)=>{
    return this.http.post<any>("http://localhost:3000/addBpoint",bpoint)
  }

  viewbpoint=()=>{
    return this.http.get<any>("http://localhost:3000/viewBpoint")
  }
  deletebpoint=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/deleteBpoint/"+id)
  }
  

  viewpoint=(i:any)=>{
    console.log(i.routeNo)
    return this.http.post<any>("http://localhost:3000/viewbpoint",i)
  }

  //complaint


  addcomplaint=(complaint:any)=>{
    return this.http.post<any>("http://localhost:3000/addComplaint",complaint)
  }
  viewcomplaint=()=>{
    return this.http.get<any>("http://localhost:3000/viewComplaint")
    
  }

  //route no

  addroute1=(route:any)=>{
    return this.http.post<any>("http://localhost:3000/addrouteno",route)
  }

  viewroute1=()=>{
    return this.http.get<any>("http://localhost:3000/viewrouteno")
  }


  //user routeDetails


  busdetails=(point:any)=>{
    return this.http.post<any>("http://localhost:3000/busdetails",point)
  }
  driverdetails=(driver:any)=>{
    return this.http.post<any>("http://localhost:3000/driverdetails",driver)
  }

 
}

