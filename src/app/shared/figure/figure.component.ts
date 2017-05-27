import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-figure',
    templateUrl: './figure.component.html',
    styleUrls: ['./figure.component.styl']
})
export class FigureComponent implements OnInit {

    @Input() url: string;

    constructor() {}
    ngOnInit() {}

    setImage() {
        return `url(${this.url})`;
    }

}
