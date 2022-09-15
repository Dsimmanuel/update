import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient) { }


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

  viewRoute=()=>{
    return this.http.get<any>("http://localhost/3000/viewRoute")
  }
}

