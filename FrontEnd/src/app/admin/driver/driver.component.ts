import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  driver={
  name:"",
  userName:"",
  contactNumber:"",
  email:"",
  driverId:"",
  busId:""

  }

  constructor(private api:ApiService,
    private route:Router) { 
    api.viewdriver().subscribe(
      (response)=>{
        this.data=response
      }
    )
    
  }

  ngOnInit(): void {
  }
  onEdit(item:any) {
    item.isEdit = true
  }
  offEdit(item:any){
    item.isEdit=false
  }


  Deletedriver(datas:any){
    this.api.deletedriver(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )

  }
  
  Updatedriver(i:any){
    
    console.log()
    this.api.updatedriver(i).subscribe(
      (data)=>{
        console.log(data)
        i.isEdit=false
      }
      
      
    )
    


  }

  saveDriver(i:any){
    console.log(i)
    this.api.savedriver(i)
    this.route.navigate(['/adddriver'])
  }



  data:any=[]
}
