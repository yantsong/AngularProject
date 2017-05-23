import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
private products: Array<Product>;
  constructor() { }

  ngOnInit() {

    this.products = [
    new Product(1,"onestuff",1.99,3.5,"its a descrption",["one","two","three"]),
    new Product(2,"2stuff",1.99,3.5,"its a descrption",["one","two",]),
    new Product(3,"o3estuff",1.99,5,"its a descrption",["one","two","three"]),
    new Product(4,"on4estuff",1.99,2.5,"its a descrption",["one","three"]),
    new Product(5,"on5estuff",1.99,1.5,"its a descrption",["two","three"]),
    new Product(6,"one6stuff",1.99,4.5,"its a descrption",["three"])
    ]
  }

}
export class Product {

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public dese:string,
    public catego:Array<string>,
  )
  {

  }
}