import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input ()
  private rating: number = 0;
  private stars :Array<boolean>;
  @Input ()  
  private radeOnly:boolean=true;
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (var index = 0; index < 5; index++) {
      this.stars.push(index >= this.rating);
    }
  }
  changeStar(index:number){
    if(this.radeOnly) return;
    this.rating = index+1;
    this.stars = [];
    for (var index = 0; index < 5; index++) {  
      this.stars.push(index >= this.rating);
    }
  }

}
