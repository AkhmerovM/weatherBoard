import { useSelector } from 'react-redux';
import { AppState } from '@/store/store';
export const useSelectCities = () => {
    return useSelector((state: AppState) => state.cities.data);
};
