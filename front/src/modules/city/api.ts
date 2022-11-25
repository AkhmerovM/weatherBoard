import { Dispatch } from '@reduxjs/toolkit';
import { actions } from '@/modules/city/slice';
export const fetchCities = (): (dispatch: Dispatch) => Promise<any> => {
    return async (dispatch: Dispatch) => {
        const data = await fetch('http://localhost:8090/cities').then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).catch((error) => {
            console.log(error);
        });

        return dispatch(actions.loadCities(data));
    };
};
