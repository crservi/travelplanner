import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './paises/paises.component';
import { PaisesDetailComponent } from './paises/paises-detail/paises-detail.component';

const routes: Routes = [
  { path: '', component: PaisesComponent },
  { path: ':id', component: PaisesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
