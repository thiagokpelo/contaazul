import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CarService }             from '../shared/car/car.service';
import { Car }                    from '../shared/car/car.model';

@Component({
    selector: 'app-editar',
    templateUrl: './editar.component.html',
    styleUrls: ['./editar.component.styl']
})
export class EditarComponent implements OnInit {

    private router:      Router;
    private route:       ActivatedRoute;

    private carService:  CarService     = new CarService();
    private showMessage: boolean        = false;

    private car:         Car;

    constructor(_route: ActivatedRoute) {

        this.route = _route;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let car = new Car('', '', '');
            car = this.carService.getOne(Number(params['index']));

            this.car = car;

            console.log("Carro: ", this.car)
        })
    }

    update( car: Car ) {
        this.carService.update( car );
        this.showMessage = true;
    }
}
