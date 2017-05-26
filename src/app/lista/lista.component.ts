import { CarService } from './../car/car.service';
import { Component, OnInit } from '@angular/core';

import { Car } from './../car/car.class';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.styl']
})
export class ListaComponent implements OnInit {

  public cars: Car[] = [];
  public service: CarService = new CarService();

  constructor() {}

  ngOnInit() {
    this.cars = this.service.getCars()
  }

}
