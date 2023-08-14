import {ThunkDispatch} from "redux-thunk/src/types";

export enum ModuleState {
    loading = 'LOADING',
    error = 'ERROR',
    initial = 'INITIAL',
    success = 'SUCCESS'
}