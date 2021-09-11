import { ActionReducerMap, createReducer } from "@ngrx/store";

import { AppState } from "../app.store";


export namespace CoreReducer {
  export const reducer: ActionReducerMap<AppState.Type>  = createReducer(AppState.INITIAL);
}
