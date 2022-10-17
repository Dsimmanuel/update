import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
    
 
  
    boardingPoints={
      routeNo:"",
      stopNo:"",
      point:"",
      time:""
    }

  constructor(private api:ApiService) {
    
    api.viewRoute().subscribe(
      (response)=>{
        console.log(response)
        this.data1=response
        
      }
    )
   }
  add(i:any){
    console.log(i)

    this.api.viewpoint(i).subscribe(
      
      (response)=>{
        this.data=response
        console.log(this.data)
        
        
      }
    )

  }
  ngOnInit(): void {
  }
  onEdit(item:any) {
    item.isEdit = true
  }
  offEdit(item:any){
    item.isEdit = true
  }

  isAdd =false
  
 IsAdd(){
   this.isAdd=true 
 } 




Addbpoint(){

  this.api.addbpoint(this.boardingPoints).subscribe(
    (data)=>{
      console.log(data)
      this.isAdd =false
      this.api.viewpoint(this.boardingPoints).subscribe(
        (response)=>{
          this.data=response
          
        }
      )

    }
  )
}
Deletebpoint(datas:any){
  this.api.deletebpoint(datas._id).subscribe(
    (data)=>{
       console.log(data);
       this.data = this.data.filter((u:any)=>u!==datas)
    }
  )

}




  data:any=[]
  data1:any=[]
}
