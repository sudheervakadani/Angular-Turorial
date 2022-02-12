import { ActionReducerMap } from "@ngrx/store";
import { LOAD_SPINNER } from "../actions";

export interface HomeState{

  loadingStatus: boolean
}

export const HOME_INITIALSTATE: HomeState ={

  loadingStatus: false

}

export function homeReducer(state = HOME_INITIALSTATE, action) {
  switch(action.type) {
    case LOAD_SPINNER: return {...state, loadingStatus: action.payload}
  }
  return state
}

