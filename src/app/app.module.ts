import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { CarService } from './car/car.service';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { TableComponent } from './table/table.component';
import { NovoComponent } from './novo/novo.component';
import { CarPipe } from './car/car.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    TableComponent,
    NovoComponent,
    CarPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
