import { Component, ChangeDetectionStrategy, Input, OnInit, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AFormInput } from '../../classes';


@Component({
  selector:         'ashetm-tourism-shared-input',
  templateUrl:      './shared-input.component.html',
  styleUrls:        ['./shared-input.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [
    {
      provide:  NG_VALUE_ACCESSOR,
      useClass: SharedInputComponent,
      multi:    true
    }
  ]
})
export class SharedInputComponent extends AFormInput implements OnDestroy, OnInit {

  @Input() label!:        string;
  @Input() placeholder!:  string;
  @Input() icon?:         string;

  private _formControlValueChangesSubscription?:  Subscription;

  ngOnInit(): void {
    this._formControlValueChangesSubscription = this.formControl.valueChanges
      .subscribe((val: string) => {
        super.onChange(val);
        super.onTouched();
      });
  }

  ngOnDestroy(): void {
    this._formControlValueChangesSubscription?.unsubscribe();
  }

}
