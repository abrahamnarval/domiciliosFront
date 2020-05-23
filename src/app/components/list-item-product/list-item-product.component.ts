import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-list-item-product',
  templateUrl: './list-item-product.component.html',
  styleUrls: ['./list-item-product.component.css']
})
export class ListItemProductComponent implements OnInit {

  products:any
  constructor(private productService: ProductService) {  }

  ngOnInit(): void {
    this.productService.getProductDetails().subscribe(data => {
      if(data){
        console.log(data);
        this.products = data;
      }
    })
  }
}
