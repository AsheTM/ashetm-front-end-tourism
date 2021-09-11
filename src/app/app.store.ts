import { ActionReducerMap, createReducer } from "@ngrx/store";


export namespace AppSelector {
  export const featureSlice:  string = Symbol('homeSliceStore').toString();
}

export namespace AppState {
  export type Type = {};

  export const INITIAL: Type = {};
}

export namespace AppAction {
  //
}
