import { TEnvironmentFeature } from './environment.enum';

import { TCoreRootConfiguration } from 'src/app/core';
import { TSharedFeatureConfiguration, TSharedRootConfiguration } from 'src/app/shared';


export type TEnvironment                    = {
  production:     boolean;
  configuration:  TEnvironmentConfiguration;
};

export type TEnvironmentConfiguration       = {
  core:   TEnvironmentConfigurationCore;
  shared: TEnvironmentConfigurationShared;
};

export type TEnvironmentConfigurationCore   = TCoreRootConfiguration;

export type TEnvironmentConfigurationShared = {
  root:     TEnvironmentConfigurationSharedCore;
  feature:  Record<TEnvironmentFeature, TEnvironmentConfigurationSharedFeature>;
};

export type TEnvironmentConfigurationSharedCore = TSharedRootConfiguration;

export type TEnvironmentConfigurationSharedFeature = TSharedFeatureConfiguration;
