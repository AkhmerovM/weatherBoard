import { Action } from '@reduxjs/toolkit';
import { cityActions } from '@/modules/city/slice';
import { AxiosError, AxiosResponse } from 'axios';
import { ModuleState } from '@/store/types';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';
import { AppDispatch } from '@/store/store';
import {axiosInstance} from "@/modules/common/config/axios";

export const getCities = (cityIds: PropType<TCity, 'id'>[]): (dispatch: AppDispatch) => Promise<Action> => {
    return async (dispatch: AppDispatch) => {
        dispatch(cityActions.startLoadingCities());
        return dispatch(fetchCities(cityIds));
    }
}

export const fetchCities = (cityIds: PropType<TCity, 'id'>[]): (dispatch: AppDispatch) => Promise<Action> => {
    return async (dispatch: AppDispatch) => {
        try {
            const response: AxiosResponse = await axiosInstance.post('/cities', { cityIds });
            if (response.statusText === 'OK') {
                return dispatch(cityActions.loadCities({ data: response.data, error: null, moduleState: ModuleState.success }));
            } else {
                throw new Error(response.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError || error instanceof Error) {
                return dispatch(cityActions.loadCities({ data: null, error, moduleState: ModuleState.error }));
            }
        }
    };
};
