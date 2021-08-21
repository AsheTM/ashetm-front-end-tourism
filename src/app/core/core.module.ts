import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { } from './core.provider';
import { TCoreRootConfiguration } from './core.type';


@NgModule({
  imports:  [
    BrowserModule
  ], 
  exports:  [
    BrowserModule
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
