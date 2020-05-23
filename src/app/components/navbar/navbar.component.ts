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


  goDashboard(){
    if(this.user.rol){
      this.router.navigate(['/admin'])
    }else{
      
    }
  }

  cerrarSesion(){
    localStorage.removeItem('userToken');
    this.authService.setUser(null);
    this.router.navigate(['/home'])
  }

}
