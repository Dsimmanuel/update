import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-routeadmin',
  templateUrl: './routeadmin.component.html',
  styleUrls: ['./routeadmin.component.css']
})
export class RouteadminComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewRoute().subscribe(
      (response)=>{
        this.data=response
        
      }
    )
  }
   

  ngOnInit(): void {
  }
 data:any=[]
}
