import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector:         'ashetm-tourism-home-navigation[index][length]',
  templateUrl:      './home-navigation.component.html',
  styleUrls:        ['./home-navigation.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class HomeNavigationComponent {

  @Input() index:   number;
  @Input() length:  number;

  @Output() next:     EventEmitter<number>  = new EventEmitter<number>();
  @Output() previous: EventEmitter<number>  = new EventEmitter<number>();

  onClickNextEventHandler(): void {
    this.next.emit((this.index + this.length - 1) % this.length);
  }

  onClickPreviousEventHandler(): void {
    this.next.emit((this.index + 1) % this.length);
  }

}
