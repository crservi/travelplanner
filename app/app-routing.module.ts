import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path: 'hotels',
  loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
},
{
  path: 'calendar',
  loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
},
{
  path: 'paises',
  loadChildren: () => import('./paises/paises.module').then(m => m.PaisesModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
