import { Action, ActionReducerMap } from "@ngrx/store";

export type TSharedRootConfiguration = {};

export type TSharedFeatureConfiguration = { };

export type TSharedFeatureStoreConfiguration<S, A extends Action = Action> = {
  featureName:  string;
  reducers:     ActionReducerMap<S, A>;
};
