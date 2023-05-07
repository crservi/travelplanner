import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './paises/paises.component';
import { SharedModule } from '../shared/shared.module';
import { PaisesDetailComponent } from './paises/paises-detail/paises-detail.component';


@NgModule({
  declarations: [
    PaisesComponent,
    PaisesDetailComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule
  ]
})
export class PaisesModule { }
