import { useSelector } from 'react-redux';
import { AppState } from '@/store/store';
import { CityState } from '@/modules/city/slice';
export const useSelectCityState = (): CityState => {
    return useSelector((state: AppState) => state.cities);
};
