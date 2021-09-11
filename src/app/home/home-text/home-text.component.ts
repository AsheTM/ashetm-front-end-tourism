import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ChangeDetectionStrategy, SimpleChanges, ChangeDetectorRef, OnChanges, Input } from '@angular/core';


@Component({
  selector:         'ashetm-tourism-home-text',
  templateUrl:      './home-text.component.html',
  styleUrls:        ['./home-text.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class HomeTextComponent implements OnChanges {

  @Input() items:   string[]  = [];
  @Input() index?:  number;
  @Input()
    get title(): boolean {
      return this._isTitle;
    }
    set title(val: boolean) {
      this._isTitle = coerceBooleanProperty(val !== undefined);
    }

  private _data:    string[]  = [];
  private _i:       number    = 0;
  private _isTitle: boolean   = false;

  get data(): string[] {
    return this._data;
  }

  get i(): number {
    return this._i;
  }

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) { }

  ngOnChanges({ index, items }: SimpleChanges): void {
    const indexCurrentValue:  number | undefined  = index?.currentValue;
    const indexPreviousValue: number | undefined  = index?.previousValue;
    const itemsLength:        number              = this.items.length;

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

  private _goPrevious(element: string): void {
    this._data = [element, ...this.data];
    setTimeout(() => {
      this._i -= 1;
      this._changeDetectorRef.detectChanges();
    }, 1);
  }

  private _goNext(element: string): void {
    this._data = [...this.data, element];
  }

}
