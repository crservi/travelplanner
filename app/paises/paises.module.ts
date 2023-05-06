import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './paises/paises.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PaisesComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule
  ]
})
export class PaisesModule { }
