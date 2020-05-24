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
    this.getDomiciles();
  }

  cancelDomicile(domicile:any){
    this.domicileService.updateDomicile(domicile.id, 4).subscribe(res => {
      if(res){
        console.log(res);
        this.getDomiciles();
      }
    }, (error) => {
      console.log(error)
      
    })
    console.log(domicile);
  }

  getDomiciles(){
    const user = this.authService.user;
    this.domicileService.getDomicilesByUserId(user.id).subscribe(data => {
      if(data){
        this.domiciles = data;
      }
    })
  }

}
