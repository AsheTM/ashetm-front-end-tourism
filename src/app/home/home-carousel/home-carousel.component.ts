import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef
} from '@angular/core';

import { THomeCarouselItem } from '../home.type';


@Component({
  selector:         'ashetm-tourism-home-carousel',
  templateUrl:      './home-carousel.component.html',
  styleUrls:        ['./home-carousel.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class HomeCarouselComponent implements OnChanges {

  @Input() items:   THomeCarouselItem[] = [];
  @Input() index?:  number;

  readonly ratingMaxStars: number = 5;

  private _data:  THomeCarouselItem[] = [];
  private _i:     number              = 0;

  get data(): THomeCarouselItem[] {
    return this._data;
  }

  get i(): number {
    return this._i;
  }

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) { }

  ngOnChanges({ index, items }: SimpleChanges): void {
    const indexCurrentValue:  number | undefined              = index?.currentValue;
    const indexPreviousValue: number | undefined              = index?.previousValue;
    const itemsLength:        number                          = this.items.length;

    this._data = items?.currentValue || this.data;

    if(indexCurrentValue !== undefined && indexPreviousValue !== undefined) {
      let isPrevious: boolean = indexPreviousValue === 0 && indexCurrentValue + 1 === itemsLength;
      let isNext:     boolean = indexCurrentValue === 0 && indexPreviousValue + 1 === itemsLength;

      if(!isPrevious && !isNext) {
        isPrevious  = indexCurrentValue < indexPreviousValue;
        isNext      = indexCurrentValue > indexPreviousValue;
      }

      this._i += 1;

      if(isPrevious && !isNext) {
        this._goPrevious(this.items[indexPreviousValue]);
      }

      if(!isPrevious && isNext) {
        this._goNext(this.items[indexPreviousValue]);
      }
    }
  }

  private _goPrevious(element: THomeCarouselItem): void {
    this._data = [element, ...this.data];
    setTimeout(() => {
      this._i -= 1;
      this._changeDetectorRef.detectChanges();
    }, 1);
  }

  private _goNext(element: THomeCarouselItem): void {
    this._data = [...this.data, element];
  }

}
