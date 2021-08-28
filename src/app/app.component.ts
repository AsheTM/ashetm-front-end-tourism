import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector:         'ashetm-tourism-root',
  templateUrl:      './app.component.html',
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ashetm-front-end-tourism';
}
