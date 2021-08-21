import { environmentCommonConfigurationCore, environmentCommonConfigurationShared } from './environment.common';
import { TEnvironment } from './environment.type';


export const environment: TEnvironment = {
  production:     true,
  configuration:  {
    core:   {
      ...environmentCommonConfigurationCore
    },
    shared: {
      ...environmentCommonConfigurationShared
    }
  }
};
