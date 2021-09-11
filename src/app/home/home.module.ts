import { NgModule } from '@angular/core';

import { HomeArrayPipe } from './home-array.pipe';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeResolver } from './home.resolver';
import { Reducer, Selector } from './home.store';

import { HomeBackgroundComponent } from './home-background';
import { HomeCarouselComponent } from './home-carousel';
import { HomeNavigationComponent } from './home-navigation';
import { HomeProgressComponent } from './home-progress';
import { HomeTextComponent } from './home-text';

import { SharedModule } from '../shared';

import { environment } from 'src/environments';


@NgModule({
  declarations: [
    HomeComponent,

    HomeBackgroundComponent,
    HomeCarouselComponent,
    HomeNavigationComponent,
    HomeProgressComponent,
    HomeTextComponent,

    HomeArrayPipe
  ],
  imports:      [
    SharedModule.forFeature(environment.configuration.shared.feature.home, {
      featureName:  Selector.FEATURE_SLICE,
      reducers:     Reducer.reducer
    }),

    HomeRoutingModule
  ],
  providers:    [
    HomeResolver
  ]
})
export class HomeModule { }
