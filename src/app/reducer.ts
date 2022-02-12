import { ActionReducerMap } from "@ngrx/store";
import { homeReducer, HomeState, HOME_INITIALSTATE } from "./store/home.reducer";

export interface AppState{

  homeState: HomeState

}

export const APP_INITIALSTATE={

  homeState: HOME_INITIALSTATE

}

export const appReducer: ActionReducerMap<AppState> = {

  homeState: homeReducer

}

