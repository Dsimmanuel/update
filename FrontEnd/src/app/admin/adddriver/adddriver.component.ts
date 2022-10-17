
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css']
})
export class AdddriverComponent implements OnInit {

  rdata:any=[]
  constructor(private api:ApiService,
    private route:Router) { 
   this.rdata = this.api.receivedata()
   console.log("driver")
   console.log(this.rdata)
   if(this.rdata){
    this.driver = this.rdata
    console.log(this.driver)
   }
  }

  ngOnInit(): void {
    (function () {
      
      var forms = document.querySelectorAll('.needs-validation')
    
      
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event:any) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
            
          }, false)
        })
    })()
  }
  Updatedriver(i:any){
    
    console.log()
    this.api.updatedriver(i).subscribe(
      (data)=>{
        console.log(data)
        this.route.navigate(['/driver'])
      }
      
      
    )
    


  }
  
  driver:any=[]

}