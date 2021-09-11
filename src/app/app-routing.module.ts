import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTE_DEFAULT, APP_ROUTE_FEATURE_HOME, APP_ROUTE_WILDCARD } from './app.route';


const routes: Routes = [
  { path: APP_ROUTE_FEATURE_HOME, loadChildren: () => import('./home').then(m => m.HomeModule) },
  {
    path:       APP_ROUTE_WILDCARD,
    redirectTo: APP_ROUTE_DEFAULT
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
