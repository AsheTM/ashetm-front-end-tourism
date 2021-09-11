import { Component, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector:         'ashetm-tourism-home-progress',
  templateUrl:      './home-progress.component.html',
  styleUrls:        ['./home-progress.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class HomeProgressComponent {

  @Input() length?: number;
  @Input() index?:  number;

}
