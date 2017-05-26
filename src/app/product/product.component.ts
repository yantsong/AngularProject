import { ProductService, Product } from './../shared/product-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
private products: Array<Product>;
  constructor(private ProductService: ProductService) { }

  ngOnInit() {

    this.products = this.ProductService.getProducts();
  }

}