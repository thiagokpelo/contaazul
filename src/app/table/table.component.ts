import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

import { Car } from './../car/car.class';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.styl']
})
export class TableComponent implements OnInit {

  private page:         number = 1;
  private pages:        number[];

  @Input() cars:        Car[];
  @Input() textFilter:  string;

  constructor() {}

  ngOnInit() {
    let size: number = Math.ceil(this.cars.length / 5);
    this.pages = Array.from(new Array(size), (val, index) => index + 1);
  }

  indexSlice() {
    return this.pages.indexOf(this.page) * 5;
  }

  currentPage(index) {
    this.page = index;
  }

  firstPage() {
    return this.page == 1;
  }

  lastPage() {
    return this.page == this.pages[this.pages.length - 1];
  }

  prevPage() {
    --this.page;
  }

  nextPage() {
    ++this.page;
  }

  showNavPage() {
    return this.cars.length > 5;
  }

}
