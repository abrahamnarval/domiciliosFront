import { Component, OnInit } from '@angular/core';
import { DomicileService } from 'src/app/services/domicile/domicile.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  domiciles:any;
  constructor(private domicileService: DomicileService) {
  }

  ngOnInit(): void {
    this.getDomiciles();
  }

  handleDomicile(domicile:any, statusID:any){
    this.domicileService.updateDomicile(domicile.id, statusID).subscribe(res => {
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
    this.domicileService.getDomicilesDetails().subscribe(data => {
      if(data){
        this.domiciles = data;
        console.log(data);
      }
    })
  }

}
