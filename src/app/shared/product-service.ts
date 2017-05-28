

import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
private products:Product [] = [
    new Product(1,"onestuff",1.99,3.5,"its a descrption",["one","two","three"]),
    new Product(2,"2stuff",1.99,3.5,"its a descrption",["one","two",]),
    new Product(3,"o3estuff",1.99,5,"its a descrption",["one","two","three"]),
    new Product(4,"on4estuff",1.99,2.5,"its a descrption",["one","three"]),
    new Product(5,"on5estuff",1.99,1.5,"its a descrption",["two","three"]),
    new Product(6,"one6stuff",1.99,4.5,"its a descrption",["three"])
    ]
private comment:Comment [] = [
    new Comment(1,"onestuff",1.99,3.5,"2012-2-2","nice"),
    new Comment(1,"2stuff",1.99,3.5,"2012-2-2",'good'),
    new Comment(1,"o3estuff",1.99,5,"2012-2-2",'ok'),
    new Comment(4,"on4estuff",1.99,2.5,"2012-2-2","one"),
    new Comment(5,"on5estuff",1.99,1.5,"2012-2-2","three"),
    new Comment(6,"one6stuff",1.99,4.5,"2012-2-2",'hehe')
    ]

  constructor() {
}
getProducts():Product[]{
    return this.products;
}
getProductByid(id:number): Product {
return this.products.find((p) => p.id == id);
}
getCommentForId(id:number) :Comment[]{
    return this.comment.filter((comment) => comment.id == id)
}
creatComment(user:string,rating:number,time:string,com:string):Comment{
  return new Comment(1,user,1,rating,time,com);
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
export class Comment {

  constructor(
    public id:number,
    public user:string,
    public productId:number,
    public rating:number,
    public time:string,
    public content:string,
  )
  {
  }
}
