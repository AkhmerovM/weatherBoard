import { Action, Dispatch } from '@reduxjs/toolkit';
import { cityActions } from '@/modules/city/slice';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ModuleState } from '@/store/types';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';

export const fetchCities = (activeCitiesIds: PropType<TCity, 'id'>[]): (dispatch: Dispatch) => Promise<Action> => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(cityActions.startLoadingCities());

            const response: AxiosResponse = await axios.post('http://localhost:8090/cities', { cities: activeCitiesIds });
            if (response.statusText === 'OK') {
                return dispatch(cityActions.loadCities({ data: response.data, error: null, state: ModuleState.success }));
            } else {
                console.log(response);
                throw new Error(response.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError || error instanceof Error) {
                return dispatch(cityActions.loadCities({ data: null, error, state: ModuleState.error }));
            }
        }
    };
};