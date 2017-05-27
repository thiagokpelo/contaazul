import { Component,
         OnInit,
         ElementRef,
         Input,
         Output,
         EventEmitter } from '@angular/core';

import { Car }          from './../car/car.model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.styl']
})
export class TableComponent implements OnInit {

    @Input() cars:          Car[];
    @Input() textFilter:    string;
    @Output() actionRemove: EventEmitter<number> = new EventEmitter();

    private page:           number = 1;
    private pages:          number[];
    private checkAll:       boolean = false;

    constructor() { }

    ngOnInit() {
        const SIZE: number = Math.ceil( this.cars.length / 5 );
        this.pages         = Array.from( new Array( SIZE ), ( val, index ) => index + 1 );
    }

    toggleAllChecks() {
        this.cars.forEach((car) => {
            car.check = this.checkAll;
        });
    }

    sendIndex(i) {
        this.actionRemove.emit(i);
    }

    indexSlice() {
        return this.pages.indexOf( this.page ) * 5;
    }

    currentPage( index ) {
        this.page = index;
    }

    firstPage() {
        return this.page == 1;
    }

    lastPage() {
        return this.page == this.pages[ this.pages.length - 1 ];
    }

    prevPage() {
        --this.page;
    }

    nextPage() {
        ++this.page;
    }   
}