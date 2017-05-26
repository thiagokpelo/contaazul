import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CarService } from './../car/car.service';
import { Car } from './../car/car.class';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.styl']
})
export class NovoComponent implements OnInit {

  createForm: FormGroup;
  private car:        Car;

  constructor(service: CarService, formBuilder: FormBuilder) {
  }

  create(event) {

    event.preventDefault();
    console.log(this.car);
  }

  ngOnInit() {
  }

}
