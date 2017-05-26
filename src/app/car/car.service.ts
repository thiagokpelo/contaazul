import { Injectable } from '@angular/core';

import { Car } from './car.class';
import { Cars } from './cars';

const CARS: Car[] = Cars

@Injectable()
export class CarService {

  getCars(): Car[] {
    return CARS.map(c => c);
  }

  getOne(car: Car): Car {
    let index = CARS.indexOf(car);
    return CARS.find(c => c[index] === index);
  }

  update(car: Car) {
    let index = CARS.indexOf(car);
    let originalCar = CARS.find(c => c[index] === car[index]);
  }

  create(car: Car) {
    CARS.push(car);
    return CARS;
  }

  remove(car: Car) {
    let index = CARS.indexOf(car);
    CARS.splice(index, 1);
    return CARS;
  }
}
