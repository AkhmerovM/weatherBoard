import { Action, Dispatch } from '@reduxjs/toolkit';
import { cityActions } from '@/modules/city/slice';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ModuleState } from '@/store/types';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';
import { AppDispatch } from '@/store/store';

export const fetchCities = (activeCitiesIds: PropType<TCity, 'id'>[]): (dispatch: Dispatch) => void => {
    return async (dispatch: AppDispatch) => {
        dispatch(cityActions.startLoadingCities());
        dispatch(pollCities(activeCitiesIds));
    };
};

export const pollCities = (activeCitiesIds: PropType<TCity, 'id'>[]): (dispatch: Dispatch) => void => {
    return async (dispatch: AppDispatch) => {
        try {
            const response: AxiosResponse = await axios.post('http://localhost:8090/cities', { cities: activeCitiesIds });
            if (response.statusText === 'OK') {
                dispatch(cityActions.loadCities({ data: response.data, error: null, moduleState: ModuleState.success }));
            } else {
                console.log(response);
                throw new Error(response.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError || error instanceof Error) {
                dispatch(cityActions.loadCities({ data: null, error, moduleState: ModuleState.error }));
            }
        }
    };
};
