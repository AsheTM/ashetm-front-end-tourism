import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared';

import { environment } from 'src/environments';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule.forRoot(environment.configuration.shared.root),

    HomeRoutingModule
  ]
})
export class HomeModule { }
