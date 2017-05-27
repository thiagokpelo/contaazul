import { Component,
         OnInit,
         Output,
         Input,
         EventEmitter }         from '@angular/core';
import { FormGroup,
         FormBuilder,
         Validators,
         FormControl }          from "@angular/forms";

import { Car }                  from '../car/car.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {

    @Output() sendEventCar: EventEmitter<Car> = new EventEmitter();
    @Input()  editCar:      Car;

    private car:            Car = new Car('', '', '');
    private createForm:     FormGroup;

    constructor( private _fb: FormBuilder ) {
    }

    ngOnInit() {
        if (this.editCar) {
            this.car = this.editCar;
        }

        this.instanceForm();
    }

    instanceForm() {
        this.createForm = this._fb.group({
            marca:       [ '', Validators.required ],
            modelo:      [ '', Validators.required ],
            placa:       [ '', Validators.compose([ Validators.required, Validators.pattern( /[A-Za-z]{3}-[\d]{4}/ ) ]) ],
            imagem:      [ '' ],
            combustivel: [ '' ],
            valor:       [ '' ]
        });
    }

    create($event) {
        $event.preventDefault();

        this.sendEventCar.emit( this.car );
        this.instanceForm();
    }

    update($event) {
        $event.preventDefault();
        
        this.sendEventCar.emit( this.car );
    }
}
