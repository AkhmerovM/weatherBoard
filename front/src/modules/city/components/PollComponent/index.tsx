import React from 'react';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';
import { pollCities } from '@/modules/city/api';
type PollComponentProps = {
    activeCitiesIds: PropType<TCity, 'id'>[]
}
export const PollComponent: React.FC<PollComponentProps> = ({activeCitiesIds}) => {
    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        const interval = setInterval(() => {
            dispatch(pollCities(activeCitiesIds));
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return null;
};
