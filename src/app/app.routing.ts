import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';


const APP_ROUTES: Routes = [
  { path: '', component: ListaComponent },
  { path: 'novo', component: NovoComponent },
  { path: '', component: ListaComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
