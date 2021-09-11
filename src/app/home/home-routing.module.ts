import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HOME_CONSTANT_RESOLVER } from './home.constant';
import { HomeResolver } from './home.resolver';
import { HOME_ROUTE_ROOT } from './home.route';


const routes: Routes = [
  {
    path:       HOME_ROUTE_ROOT,
    component:  HomeComponent,
    resolve:    {
      [HOME_CONSTANT_RESOLVER]: HomeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
