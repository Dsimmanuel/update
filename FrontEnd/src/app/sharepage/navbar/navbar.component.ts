import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isStudent=false
  isAdmin=false
  isDriver=false

  constructor(public api:ApiService) { }

  ngOnInit(): void {
    
  }

}
