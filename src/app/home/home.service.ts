import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, from, interval, Observable, OperatorFunction, Subscription } from 'rxjs';
import { map, mapTo, pluck, switchMap, switchMapTo, toArray } from 'rxjs/operators';

import { HOME_CONSTANT_RESOLVER } from './home.constant';
import { Action, Selector, State } from './home.store';
import { THome, THomeBackgroundItem, THomeCarouselItem } from './home.type';


@Injectable()
export class HomeService implements OnDestroy {

  indexStoreHome$:                    Observable<number>
    = this._store.select(Selector.getIndex);

  locationsResolverHome$:             Observable<THome[]>
    = this._activatedRoute.data
      .pipe(pluck(HOME_CONSTANT_RESOLVER));
  locationsLengthHome$:               Observable<number>
    = this.locationsResolverHome$
      .pipe(map((data: THome[]) => data.length));
  locationsBackgroundResolverHome$:   Observable<THomeBackgroundItem[]>
    = this.locationsResolverHome$
      .pipe(this._pluckHomeArray<THomeBackgroundItem>('background'));
  locationsItemsResolverHome$:        Observable<THomeCarouselItem[]>
    = this.locationsResolverHome$
      .pipe(switchMap((data: THome[]) =>
        from(data).pipe(
          map(({ country, image, rating }: THome) => ({ country, image, rating })),
          toArray()
        )));
  locationsDescriptionResolverHome$:  Observable<string[]>
    = this.locationsResolverHome$
      .pipe(this._pluckHomeArray<string>('description'));
  locationsTitleResolverHome$:        Observable<string[]>
    = this.locationsResolverHome$
      .pipe(this._pluckHomeArray<string>('country'));

  private _toggleNavigationHome:      BehaviorSubject<void>
    = new BehaviorSubject<void>(null);
  private _toggleNavigationHome$:     Observable<void>
    = this._toggleNavigationHome.asObservable();

  private _intervalHome$:             Observable<void>
    = this._toggleNavigationHome$
      .pipe(
        switchMapTo(interval(8000)),
        mapTo(null)
      );
  private _intervalHomeSubscription:  Subscription;

  constructor(
    private _activatedRoute:  ActivatedRoute,
    private _store:           Store<State.Type>
  ) { }

  ngOnDestroy(): void {
    this._intervalHomeSubscription?.unsubscribe();
  }

  enableAutoSlide(navigationComponent: unknown & { onClickPreviousEventHandler }): void {
    this._intervalHomeSubscription = this._intervalHome$.subscribe(() => navigationComponent.onClickPreviousEventHandler());
  }

  getIndex(index: number): void {
    this._store.dispatch(Action.getIndex({ index }));
  }

  private _pluckHomeArray<T extends THome[keyof THome]>(property: string): OperatorFunction<THome[], T[]> {
    return (source: Observable<THome[]>) => source.pipe(switchMap((data: THome[]) =>
      from(data).pipe(
        pluck(property),
        toArray<T>()
      )));
  }

}
