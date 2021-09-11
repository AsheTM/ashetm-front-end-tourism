import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { THomeBackgroundItem } from '../home.type';


@Component({
  selector:         'ashetm-tourism-home-background',
  template:         `
    <img *ngFor="let background of backgrounds; let i = index"
      [alt]="background.alt"
      [class.show]="index === i"
      [src]="background.src" />
  `,
  styleUrls:        ['./home-background.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class HomeBackgroundComponent {

  @Input() backgrounds: Array<THomeBackgroundItem>[] = [];
  /**
   *  @description index of which background in background list should be shown
   *    @constraint 0 based
   */
  @Input() index?:      number;

}
