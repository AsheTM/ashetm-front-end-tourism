import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { THome } from './home.type';


@Injectable()
export class HomeResolver implements Resolve<THome[]> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<THome[]> {
    return of([
      {
        background:   { src: '/assets/backgrounds/maldives-1.jpg' },
        country:      'Maldives',
        image:        { src: '/assets/backgrounds/maldives-1.jpg' },
        description:  'Description 1',
        rating:       4
      }, {
        background:   { src: '/assets/backgrounds/uae-1.jpg' },
        country:      'United Arab Emirate',
        image:        { src: '/assets/images/uae-1.jpg' },
        description:  'Description 2',
        rating:       4
      }, {
        background:   { src: '/assets/backgrounds/maldives-1.jpg' },
        country:      'Maldives',
        image:        { src: '/assets/backgrounds/maldives-1.jpg' },
        description:  'Description 1',
        rating:       4
      }, {
        background:   { src: '/assets/backgrounds/uae-1.jpg' },
        country:      'United Arab Emirate',
        image:        { src: '/assets/images/uae-1.jpg' },
        description:  'Description 2',
        rating:       4
      }
    ]);
  }

}
