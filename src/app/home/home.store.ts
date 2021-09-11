import {
  ActionCreator,
  ActionReducerMap,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from "@ngrx/store";


export namespace Selector {
  export const FEATURE_SLICE:  string = 'homeSliceStore';
  const FEATURE_SELECTOR = createFeatureSelector(FEATURE_SLICE);

  export const getIndex = createSelector(FEATURE_SELECTOR, ({ index }: State.Type) => index);
}

export namespace State {
  export type Type = {
    index:  number;
  };

  export const INITIAL: Type = {
    index:  0
  };
}

export namespace Action {
  export const getIndex: ActionCreator<string, any> = createAction('[Home] Get Index', props<Record<'index', number>>());
}

export namespace Reducer {
  export const reducer: ActionReducerMap<unknown>  = createReducer(
    State.INITIAL,
    on(Action.getIndex, (state: State.Type, { index }: Record<'index', number>) =>
      ({
        ...state,
        index
      }))
  );
}
