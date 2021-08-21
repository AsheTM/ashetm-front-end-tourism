import { InjectionToken } from '@angular/core';

import { ESharedProvider } from './shared.enum';


namespace Provider {
  export const FOR_ROOT:    InjectionToken<ESharedProvider> = new InjectionToken<ESharedProvider>('SHARED_PROVIDER_FOR_ROOT');
  export const FOR_FEATURE: InjectionToken<ESharedProvider> = new InjectionToken<ESharedProvider>('SHARED_PROVIDER_FOR_FEATURE');

  export namespace Root { }

  export namespace Feature { }
}


export const SHARED_PROVIDER_FOR_ROOT:      InjectionToken<ESharedProvider>             = Provider.FOR_ROOT;
export const SHARED_PROVIDER_FOR_FEATURE:   InjectionToken<ESharedProvider>             = Provider.FOR_FEATURE;
