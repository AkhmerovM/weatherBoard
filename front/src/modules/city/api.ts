import { Action, Dispatch } from '@reduxjs/toolkit';
import { actions } from '@/modules/city/slice';
import axios, { AxiosError } from 'axios';
export const fetchCities = (): (dispatch: Dispatch) => Promise<Action> => {
    return async (dispatch: Dispatch) => {
        try {
            const response: Response = await axios.get('http://localhost:8090/cities');
            if (response.ok) {
                return dispatch(actions.loadCities({ data: [], error: null }));
            } else {
                throw new Error(response.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError || error instanceof Error) {
                return dispatch(actions.loadCities({ data: [], error }));
            }
        }
    };
};
