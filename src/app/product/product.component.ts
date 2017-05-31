import { ProductService, Product } from './../shared/product-service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import 'rxjs/Rx';
declare var jQuery:any;


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
private products: Array<Product>;
private keyword:string;
private newmessage:Array<Object>;
private titleFilter:FormControl = new FormControl ();
  constructor(private ProductService: ProductService) { 
this.titleFilter.valueChanges
.debounceTime(500)
.subscribe(
  value => this.keyword = value
);}

  ngOnInit() {
     var obj1;
    obj1 = jQuery.ajax(
      {
        url:"http://192.168.10.189:8085/wmedu_web/ajax/getcoulist",
        async:false,
        dataType:'json',
        error:(x,y,z) =>{
          console.log(x,y,z);
        },
        success:(res)=>{
this.newmessage = [{title:"aaa",sum:20,watch:100}];          
          // this.newmessage = res;
console.log(res.entity,this.newmessage)
this.newmessage = res.entity;
        }
    }  
      );
      console.log(obj1);
      
this.newmessage = [{title:"aaa",sum:20,watch:100}];
    this.products = this.ProductService.getProducts();
  }

}