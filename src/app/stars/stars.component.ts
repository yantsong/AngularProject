import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let index = 0; index < 5; index++) {
      this.stars.push(index >= this.rating);
    }
  }
  @Input()
  private rating: Number = 0;
  private stars: Array<boolean>;
  @Input ()
  private radeOnly: Boolean = true;
  @Output()
  private ratingChange: EventEmitter<Number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeStar(index: number) {
    if (this.radeOnly) {return; }
    this.rating = index + 1;
    this.stars = [];
    for (let index = 0; index < 5; index++) {
      this.stars.push(index >= this.rating);
    }
    this.ratingChange.emit(this.rating);
  }

}
