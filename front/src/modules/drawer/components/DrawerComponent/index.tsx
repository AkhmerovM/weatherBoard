import React, { useEffect, useState } from 'react';
import { ALL_CITIES_IN_DRAWER } from '@/modules/drawer/constants';
import { Button, Divider, Drawer } from 'antd';
import { CITY_NAMES } from '@/modules/city/constants';
import { TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';
import { drawerActions } from '@/modules/drawer/slice';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { fetchCities } from '@/modules/city/api';
import {LocalStorageService} from "@/modules/drawer/services/localStorage";

type DrawerComponentProps = {
    handleClose: () => void,
    isOpen: boolean,
    activeCitiesIds: PropType<TCity, 'id'>[],
    submitSetActiveCities: () => void,
}
export const DrawerComponent: React.FC<DrawerComponentProps> = ({ handleClose, isOpen, activeCitiesIds, submitSetActiveCities }) => {
    const [activeCities, setActiveCities] = useState<PropType<TCity, 'id'>[]>(activeCitiesIds);
    const dispatch: AppDispatch = useDispatch();
    const anotherCitiesIds = Object.keys(ALL_CITIES_IN_DRAWER).filter((id) => {
        return !activeCitiesIds.find((el) => el === +id);
    }).map(id => +id);
    const [anotherCities, setAnotherCities] = useState<PropType<TCity, 'id'>[]>(anotherCitiesIds);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        dispatch(drawerActions.set(activeCitiesIds));
    }, []);

    const handleAddAnotherCity = (cityId: PropType<TCity, 'id'>) => {
        setActiveCities(activeCities.concat(cityId));
        setAnotherCities(anotherCities.filter((id) => cityId !== id));
        setIsChanged(true);
    };
    const handleAddActiveCity = (cityId: PropType<TCity, 'id'>) => {
        setAnotherCities(anotherCities.concat(cityId));
        setActiveCities(activeCities.filter((id) => cityId !== id));
        setIsChanged(true);
    };
    const handleSetActiveCities = () => {
        dispatch(drawerActions.set(activeCities));
        submitSetActiveCities();
        LocalStorageService.set('cities', activeCities);
        dispatch(fetchCities(activeCities));
    };

    return (
        <Drawer title="Basic Drawer" placement="right" onClose={handleClose} open={isOpen}>
            <div>
                <div>Active Cities</div>
                {
                    activeCities.map((cityId) => {
                        return <span style={{ marginLeft: 10 }}>
                            <Button key={cityId} onClick={() => handleAddActiveCity(cityId)}>{CITY_NAMES[cityId]}</Button>
                        </span>;
                    })
                }
            </div>
            <Divider/>
            {
                anotherCities.map((cityId) => {
                    return <span style={{ marginLeft: 10 }}>
                        <Button key={cityId} onClick={() => handleAddAnotherCity(cityId)}>{CITY_NAMES[cityId]}</Button>
                    </span>;
                })
            }
            <div>
                <Button type={'primary'} disabled={!isChanged} onClick={handleSetActiveCities}>Save</Button>
            </div>
        </Drawer>
    );
};
