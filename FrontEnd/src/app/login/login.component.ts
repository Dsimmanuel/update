import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    name:"",
    userName:"",
    registerNumber:"",
    address:"",
    department:"",
    semester:"",
    email:"",
    boardingPoint:"",
    password:"",
    confirmPassword:""
  }
  

  constructor(private api:ApiService) { }

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

  Adduser(){
    console.log(this.user)
    if(this.user.password == this.user.confirmPassword)
    {
      console.log("password match")
      this.api.adduser(this.user).subscribe(
        (data)=>{
          alert("success");
        }
        
      )
      
    }else{
      console.log("password doesn't match")
    }
  }
  

}
