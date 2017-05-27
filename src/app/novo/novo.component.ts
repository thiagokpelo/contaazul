import { Component, OnInit, Output } from '@angular/core';

import { CarService }                from '../shared/car/car.service';
import { Car }                       from '../shared/car/car.model';

@Component({
    selector: 'app-novo',
    templateUrl: './novo.component.html',
    styleUrls: ['./novo.component.styl']
})
export class NovoComponent implements OnInit {

    private carService:  CarService = new CarService();
    private showMessage: boolean    = false;

    constructor() {}

    create( car: Car ) {
        this.carService.create( car );
        this.showMessage = true;
    }

    ngOnInit() {}

}
