import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule } from './hotels-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HotelsComponent } from './hotels/hotels.component';



@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    SharedModule
  ]
})
export class HotelsModule { }
