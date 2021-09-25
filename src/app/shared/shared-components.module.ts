import { NgModule } from '@angular/core';

import { SharedCommonModule } from './shared-common.module';
import { SharedMaterialModule } from './shared-material.module';

import { SharedButtonComponent, SharedInputComponent } from './components';



@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedInputComponent
  ],
  imports:      [
    SharedCommonModule,
    SharedMaterialModule
  ],
  exports:      [
    SharedButtonComponent,
    SharedInputComponent
  ]
})
export class SharedComponentsModule { }
