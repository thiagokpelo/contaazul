import { Pipe, PipeTransform } from '@angular/core';

import { Car } from './car.class';

@Pipe({
  name: 'filterCar'
})
export class CarPipe implements PipeTransform {

  transform(cars: Car[], value: string): Car[] {
    
    value = value.toLowerCase();
    return cars.filter(car => car.combustivel.toLowerCase().includes(value) || car.marca.toLowerCase().includes(value))
  }
}
