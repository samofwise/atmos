import { IState } from "./State";
import ActionTypes from "./Actions/ActionTypes";
import { ThunkDispatch } from "redux-thunk";

export type ThunkDispatch = ThunkDispatch<IState, null, ActionTypes>