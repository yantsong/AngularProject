import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    var obj;
    obj = jQuery.ajax(
      {
        url:"https://api.douban.com/v2/book/1220562",
        async:false,
        dataType:'jsonp',
        jsonp:'callback',
        error:(x,y,z) =>{
          console.log(x,y,z);
        },
        success:(res)=>{
console.log(res)
        }
    }
      );
    // console.log(obj.responseText);
    
  // $("#myDiv").html(htmlobj.responseText);

  //    var xmlHttpRequest = new XMLHttpRequest(); 
  //  xmlHttpRequest.open("get",'http://localhost:8080/JavaBeansDemo/a.txt',true);
  //   // xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=gbk;");  
  //  xmlHttpRequest.onreadystatechange = function(){  
  //           if(xmlHttpRequest.readyState == 4){  
  //               if(xmlHttpRequest.status == 200){  
  //                   alert("success");  
              
  //               }else{  
  //                   alert("error");  
  //               }  
  //           }  
  // }
  //  xmlHttpRequest.send(null);

  }

}
