import {AuthState} from "./types/AuthState";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const AUTH_STATE_FEATURE_NAME = "auth";

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_FEATURE_NAME);

export const isLoggedIn = createSelector(getAuthState, (state) => state.isLoggedIn);

export const selectUser = createSelector(getAuthState, (state) => state.user);
