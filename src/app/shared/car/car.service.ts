import { Injectable } from '@angular/core';

import { Car }        from './car.model';
import { Cars }       from './cars';

const CARS: Car[] = Cars

@Injectable()
export class CarService {

    getAll(): Car[] {
        return CARS.map( c => c );
    }

    getOne( index: number ): Car {
        return CARS[index];
    }

    update( car: Car ) {
        let index = CARS.indexOf(car);
        CARS[index] = car;
    }

    create( car: Car ) {
        CARS.push( car );
    }

    remove( index: number) {
        CARS.splice( index, 1 );
    }
}
