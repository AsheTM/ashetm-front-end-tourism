import { TCoreRootConfiguration } from 'src/app/core';
import { TSharedRootConfiguration } from 'src/app/shared';


export type TEnvironment                    = {
  production: boolean;
  configuration: TEnvironmentConfiguration;
};

export type TEnvironmentConfiguration       = {
  core: TEnvironmentConfigurationCore;
  shared: TEnvironmentConfigurationShared;
};

export type TEnvironmentConfigurationCore   = TCoreRootConfiguration;

export type TEnvironmentConfigurationShared = TSharedRootConfiguration;
