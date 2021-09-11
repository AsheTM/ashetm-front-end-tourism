import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { } from './core.provider';
import { CoreReducer } from './core.reducer';
import { TCoreRootConfiguration } from './core.type';


@NgModule({
  imports:  [
    BrowserModule,
    StoreModule.forRoot(CoreReducer.reducer, {
      runtimeChecks:  {
        strictActionImmutability:     true,
        strictActionSerializability:  true,
        strictActionTypeUniqueness:   true,
        strictActionWithinNgZone:     true,
        strictStateImmutability:      true,
        strictStateSerializability:   true
      }
    })
  ],
  exports:  [
    BrowserModule,
    StoreModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error(`${parentModule.constructor.name} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }

  static forRoot({}: TCoreRootConfiguration): ModuleWithProviders<CoreModule> {
    return {
      ngModule:   CoreModule,
      providers:  []
    };
  }

}
