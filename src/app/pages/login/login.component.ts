import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value

    this.authService.getUserDetails(email, password).subscribe(res => {
      if(res){
        const data:any = res;
        this.authService.decodeToken(data.token);
        localStorage.setItem('userToken', data.token);
        this.router.navigate(['/home'])
      }
    }, (error) => {
      console.log(error)
      this.error = error.error.message;
    })
  }

}
