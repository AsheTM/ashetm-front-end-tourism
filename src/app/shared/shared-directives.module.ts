import { NgModule } from '@angular/core';

import { SharedCommonModule } from './shared-common.module';

import { SharedHighlightDirective } from './directives';


@NgModule({
  declarations: [
    SharedHighlightDirective
  ],
  imports: [
    SharedCommonModule
  ],
  exports: [
    SharedHighlightDirective
  ]
})
export class SharedDirectivesModule { }
