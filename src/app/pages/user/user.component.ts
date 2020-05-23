import { Component, OnInit } from '@angular/core';
import { DomicileService } from 'src/app/services/domicile/domicile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  domiciles:any;
  constructor(private domicileService: DomicileService, private authService: AuthService) { 
  }

  ngOnInit(): void { 
    const user = this.authService.user;
    this.domicileService.getDomicilesByUserId(user.id).subscribe(data => {
      if(data){
        this.domiciles = data;
        console.log(data);
      }
    })
  }

}
