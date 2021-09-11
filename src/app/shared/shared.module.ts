import { Inject, ModuleWithProviders, NgModule, Optional, Self, SkipSelf, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Action, StoreModule } from '@ngrx/store';


import { ESharedProvider } from './shared.enum';
import { SHARED_PROVIDER_FOR_FEATURE, SHARED_PROVIDER_FOR_ROOT} from './shared.provider';
import { TSharedFeatureConfiguration, TSharedFeatureStoreConfiguration, TSharedRootConfiguration } from './shared.type';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule
  ],
  exports:      [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule
  ],
  providers:  [
    {
      provide:  SHARED_PROVIDER_FOR_ROOT,
      useValue: ESharedProvider.NO_STATIC_METHODS_INVOKED
    }, {
      provide:  SHARED_PROVIDER_FOR_FEATURE,
      useValue: ESharedProvider.NO_STATIC_METHODS_INVOKED
    }
  ]
})
export class SharedModule {

  constructor(
    @Self()
    @Inject(SHARED_PROVIDER_FOR_ROOT)
      private _forRoot: number,
    @SkipSelf()
    @Optional()
    @Inject(SHARED_PROVIDER_FOR_ROOT)
      private _forRootInFeature: number,
    @Self()
    @Inject(SHARED_PROVIDER_FOR_FEATURE)
      private _forFeature: number,
  ) {
    switch(true) {
      case this._forRoot === ESharedProvider.NO_STATIC_METHODS_INVOKED && this._forRootInFeature === null:
        throw new Error(`[${this.constructor.name}] You must call the \'forRoot\' static method in app.module.ts!`);
      case this._forRootInFeature === ESharedProvider.FOR_ROOT && this._forFeature === ESharedProvider.NO_STATIC_METHODS_INVOKED:
        throw new Error(`[${this.constructor.name}] You must call the \'forFeature\' static method in that feature module!`);
    }
  }

  static forRoot({ }: TSharedRootConfiguration): ModuleWithProviders<SharedModule> {
    return {
      ngModule:   SharedModule,
      providers:  [
        {
          provide:  SHARED_PROVIDER_FOR_ROOT,
          useValue: ESharedProvider.FOR_ROOT
        }
      ]
    };
  }

  static forFeature<S = unknown, A extends Action = Action>(
    configuration:  TSharedFeatureConfiguration,
    store?:         TSharedFeatureStoreConfiguration<S, A>
  ): ModuleWithProviders<SharedModule> {
    const { }: TSharedFeatureConfiguration = configuration;
    let sharedModule: Type<any> = SharedModule;

    if(store) {
      @NgModule({
        imports:  [
          SharedModule.forFeature(configuration),
          StoreModule.forFeature<S, A>(store.featureName, store.reducers)
        ],
        exports:  [
          SharedModule,
          StoreModule
        ]
      })
      class SharedFeatureModule {}

      sharedModule = SharedFeatureModule;
    }

    return {
      ngModule:   sharedModule,
      providers:  [
        {
          provide:  SHARED_PROVIDER_FOR_FEATURE,
          useValue: ESharedProvider.FOR_FEATURE
        }
      ]
    };
  }

}
