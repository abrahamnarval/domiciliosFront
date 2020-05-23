import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private authService: AuthService, private router: Router) {
  }

  get user():any {
    return this.authService.user;
  }

  ngOnInit() {
    
  }

  cerrarSesion(){
    localStorage.removeItem('userToken');
    this.authService.setUser(null);
  }

}
