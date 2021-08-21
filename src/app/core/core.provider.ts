import { InjectionToken } from '@angular/core';


namespace Provider {
    export const SAMPLE:    InjectionToken<any> = new InjectionToken<any>('CORE_PROVIDER_SAMPLE');
    
    export namespace Root {
        export const SAMPLE:    InjectionToken<any> = new InjectionToken<any>('CORE_PROVIDER_ROOT_SAMPLE');
    }
}


export const CORE_PROVIDER_SAMPLE:      InjectionToken<any> = Provider.SAMPLE;

export const CORE_PROVIDER_ROOT_SAMPLE: InjectionToken<any> = Provider.Root.SAMPLE;
