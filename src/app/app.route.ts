
namespace Route {
  export const ROOT:      string  = '';
  export const WILDCARD:  '**'    = '**';

  export namespace Feature {
    export const HOME:  string  = 'home';
  }

  export const DEFAULT: string  = '/' + Feature.HOME;
}


export const APP_ROUTE_DEFAULT:   string  = Route.DEFAULT;
export const APP_ROUTE_ROOT:      string  = Route.ROOT;
export const APP_ROUTE_WILDCARD:  string  = Route.WILDCARD;

export const APP_ROUTE_FEATURE_HOME:  string  = Route.Feature.HOME;
