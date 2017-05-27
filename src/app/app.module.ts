import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { routing }             from './app.routing';

import { CarService }          from './shared/car/car.service';

import { AppComponent }        from './app.component';
import { ListaComponent }      from './lista/lista.component';
import { TableComponent }      from './shared/table/table.component';
import { NovoComponent }       from './novo/novo.component';
import { CarPipe }             from './shared/car/car.pipe';
import { AlertComponent }      from './shared/alert/alert.component';
import { FormComponent }       from './shared/form/form.component';
import { FigureComponent }     from './shared/figure/figure.component';
import { EditarComponent }     from './editar/editar.component';

@NgModule({
    declarations: [
        AppComponent,
        ListaComponent,
        TableComponent,
        NovoComponent,
        CarPipe,
        AlertComponent,
        FormComponent,
        FigureComponent,
        EditarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    providers: [
        CarService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
