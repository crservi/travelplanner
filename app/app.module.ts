import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPopper } from 'angular-popper';
import { SharedModule } from './shared/shared.module';
import {RouterModule} from '@angular/router';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import {CalendarModule} from 'primeng/calendar';
import { HotelsModule } from './hotels/hotels.module';
import { HttpClientModule } from '@angular/common/http';
import { PaisesModule } from './paises/paises.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxPopper,
    SharedModule,
    HomeModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    CalendarModule,
    HotelsModule,
    HttpClientModule,
    PaisesModule,
    NgbModalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
