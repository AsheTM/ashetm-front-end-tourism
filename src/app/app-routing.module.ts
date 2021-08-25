import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTE_FEATURE_HOME } from './app.route';


const routes: Routes = [
  { path: APP_ROUTE_FEATURE_HOME, loadChildren: () => import('./home').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
