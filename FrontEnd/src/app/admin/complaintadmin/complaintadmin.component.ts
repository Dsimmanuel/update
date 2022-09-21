import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-complaintadmin',
  templateUrl: './complaintadmin.component.html',
  styleUrls: ['./complaintadmin.component.css']
})
export class ComplaintadminComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewcomplaint().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
    
  }
  data:any=[]

}
