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
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (var index = 0; index < 5; index++) {
      this.stars.push(index>this.rating);
    }
  }

}
