import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { APP_ROUTE_FEATURE_HOME } from './app.route';
import { TLinkApp } from './app.type';


@Injectable()
export class AppService {

  linksApp$:  Observable<TLinkApp[]> = of([
    {
      label:  'Home',
      route:  APP_ROUTE_FEATURE_HOME
    }, {
      label:  'Discover',
      route:  ''
    }, {
      label:  'Contact Us',
      route:  ''
    }
  ])

  constructor() { }
}
