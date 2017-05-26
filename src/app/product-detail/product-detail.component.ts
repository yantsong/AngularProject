import { Product, ProductService, Comment } from './../shared/product-service';

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments:Comment[];
  constructor(private routeInfo: ActivatedRoute,private ProductService: ProductService) { }

  ngOnInit() {
    var prodId:number = this.routeInfo.snapshot.params["prodId"];
    console.log(prodId);
    this.product = this.ProductService.getProductByid(prodId);
    this.comments = this.ProductService.getCommentForId(prodId);
    
  }

}
