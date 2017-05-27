import { inject } from '@angular/core/testing';
import { CarService }        from '../shared/car/car.service';
import { Component, OnInit } from '@angular/core';

import { Car }               from '../shared/car/car.model';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.styl']
})
export class ListaComponent implements OnInit {

    private cars:        Car[]      = [];
    private carService:  CarService = new CarService();
    private showMessage: boolean   = false;

    constructor() {}

    ngOnInit() {
        this.cars = this.carService.getAll();
    }

    removeCar(index) {
        this.carService.remove(index);

        let newCars = this.cars.slice(0);
        
        newCars.splice(index, 1);
        this.cars = newCars;
    }

}
