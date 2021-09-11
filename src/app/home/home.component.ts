import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeService } from './home.service';
import { THomeBackgroundItem, THomeCarouselItem } from './home.type';

import { HomeNavigationComponent } from './home-navigation';


@Component({
  selector:         'ashetm-tourism-home',
  templateUrl:      './home.component.html',
  styleUrls:        ['./home.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [HomeService]
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('Navigation') homeNavigationComponent: HomeNavigationComponent;

  backgrounds$:   Observable<THomeBackgroundItem[]> = this._homeService.locationsBackgroundResolverHome$;
  descriptions$:  Observable<string[]>              = this._homeService.locationsDescriptionResolverHome$;
  index$:         Observable<number>                = this._homeService.indexStoreHome$;
  items$:         Observable<THomeCarouselItem[]>   = this._homeService.locationsItemsResolverHome$;
  length$:        Observable<number>                = this._homeService.locationsLengthHome$;
  titles$:        Observable<string[]>              = this._homeService.locationsTitleResolverHome$;

  constructor(private _homeService: HomeService) { }

  ngAfterViewInit(): void {
    this._homeService.enableAutoSlide(this.homeNavigationComponent);
  }

  onClickEventHandler(): void {
    console.log('Explore');
  }

  onIndexEventHandler($event: number): void {
    this._homeService.getIndex($event);
  }

  onNextEventHandler($event: number): void {
    this._homeService.getIndex($event);
  }

  onPreviousEventHandler($event: number): void {
    this._homeService.getIndex($event);
  }

}
