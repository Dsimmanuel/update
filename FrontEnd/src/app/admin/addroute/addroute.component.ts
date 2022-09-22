import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddrouteComponent implements OnInit {

  route={
    busid:"",
    busno:"",
    seats:"",
    image:"",
    boarding:""
    }

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }


  Addroute(){
    
    console.log(this.route)
    this.api.addroute(this.route).subscribe(
      (data)=>{
        console.log(data)
        alert("success");
      }
    )
  }
}
