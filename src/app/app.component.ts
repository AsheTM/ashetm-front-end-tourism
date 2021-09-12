import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AppService } from './app.service';


@Component({
  selector:         'ashetm-tourism-root',
  templateUrl:      './app.component.html',
  styleUrls:        ['./app.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [AppService]
})
export class AppComponent {

  links$: Observable<any> = this._appService.linksApp$;

  constructor(private _appService: AppService) { }

}
