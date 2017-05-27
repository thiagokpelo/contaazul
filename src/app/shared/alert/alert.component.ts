import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.styl']
})
export class AlertComponent implements OnInit {

    @Input() show: boolean;
    @Input() type: string;

    constructor() {}

    ngOnInit() {}

}
