import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css']
})
export class AdddriverComponent implements OnInit {
  driver={
    name:"",
    userName:"",
    contactNumber:"",
    email:"",
    driverId:"",
    busId:"",
    password:""
    }

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  Adddriver(){
    console.log(this.driver)
    this.api.adddriver(this.driver).subscribe(
      (data)=>{
        console.log(data)
        alert("success");
      }
    )
  }

}
