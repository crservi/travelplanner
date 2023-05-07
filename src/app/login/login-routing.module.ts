import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'carrusel',
    pathMatch: 'full'
  },
  {
    path: 'carrusel',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
