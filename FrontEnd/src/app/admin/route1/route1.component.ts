import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {

  constructor(private api:ApiService) { 
    this.api.viewbpoint().subscribe(
      
      (response)=>{
        this.data2=response
        console.log(this.data2)
        
        
      }
    )
  }

  ngOnInit(): void {
    
  }

  checkBpoint(i:any){
    console.log(i)
    console.log(i.routeNo)
    this.api.driverdetails(i).subscribe(
      
      (response)=>{
        this.data3=response
        console.log(this.data3)
        
        
      }
    )

    this.api.busdetails(i).subscribe(
      
      (response)=>{
        this.data1=response
        console.log(this.data1)
        
        
      }
    )

    this.api.viewpoint(i).subscribe(
      
      (response)=>{
        this.data=response
        console.log(this.data)
        
        
      }
    )
    
  }
  

  data:any=[]
  data1:any=[]
  data2:any=[]
  data3:any=[]

}
