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
  newRating:number = 0;
  comment:string;
  comments:Comment[];
  isExpand:boolean= true
  constructor(private routeInfo: ActivatedRoute,private ProductService: ProductService) { }

  ngOnInit() {
    let prodId: number = this.routeInfo.snapshot.params['prodId'];
    console.log(prodId);
    this.product = this.ProductService.getProductByid(prodId);
    this.comments = this.ProductService.getCommentForId(prodId);
  }
  doComment(user:string,rating:number,com:string){
    const time = new Date().toDateString();
    let comm:Comment = this.ProductService.creatComment(user, rating,time,com);
    this.comments.unshift(comm);
    this.isExpand = true;
    this.newRating = 0;
    this.comment = '';
    let sum = this.comments.reduce((x,y,z,o)=> x+y.rating,0);
    this.product.rating = sum/this.comments.length;
  }



}
