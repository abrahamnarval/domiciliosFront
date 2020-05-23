import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-list-item-product',
  templateUrl: './list-item-product.component.html',
  styleUrls: ['./list-item-product.component.css']
})
export class ListItemProductComponent implements OnInit {

  products:any
  constructor(
    private spinner: NgxSpinnerService, 
    private productService: ProductService, 
    private authService: AuthService, 
    private router:Router) {  }

  ngOnInit(): void {
    this.productService.getProductDetails().subscribe(data => {
      if(data){
        this.products = data;
      }
    })
  }

  comprar(product:any){

    const user = this.authService.user;
    if(!user){
      this.router.navigate(['/login'])
    }
    this.spinner.show();
    let aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = "https://checkout.epayco.co/checkout.js";
    document.head.appendChild(aScript);
    var handler = null;
    const documentParsed:any = window;
    aScript.onload = function() {
      handler = documentParsed.ePayco.checkout.configure({
          key: '03a453b1a899f6b0a3c0ea686386f251',
          test: true
      })
      var data={
        //Parametros compra (obligatorio)
        name: product.name,
        description: `Ya está a punto de adquirir el producto.`,
        currency: "cop",
        amount: product.price,
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "es",

        //Onpage="false" - Standard="true"
        external: "true",

        response: `${environment.hostApi}/createDomicile/${user.id}/${product.id}`,
        //Atributos cliente
        name_billing: user.name,
        address_billing: "",
        type_doc_billing: "cc",
        mobilephone_billing: "",
        number_doc_billing: "",
      }
      handler.open(data)
    }
  }



}
