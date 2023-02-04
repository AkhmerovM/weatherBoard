import React, { useState } from 'react';
import { ALL_CITIES_IN_DRAWER } from '@/modules/drawer/constants';
import { Button, Divider, Drawer } from 'antd';
import { CITY_NAMES } from '@/modules/city/constants';
import { TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { fetchCities } from '@/modules/city/api';
import { LocalStorageService } from '@/modules/drawer/services/localStorage';
import styles from './style.less';

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
        submitSetActiveCities();
        LocalStorageService.set('cities', activeCities);
        dispatch(fetchCities(activeCities));
    };

    return (
        <Drawer title="Города мира" placement="right" onClose={handleClose} open={isOpen}>
            <div>
                <h4 style={{ marginBottom: 10 }}>Активные города</h4>
                <div style={{ marginLeft: -10 }}>
                    {
                        activeCities.map((cityId) => {
                            return <Button className={styles.buttonCityName} key={cityId} onClick={() => handleAddActiveCity(cityId)}>{CITY_NAMES[cityId]}</Button>;
                        })
                    }
                </div>
            </div>
            <Divider/>
            <h4 style={{ marginBottom: 10 }}>Неактивные города</h4>
            {
                anotherCities.map((cityId) => {
                    return <Button className={styles.buttonCityName} key={cityId} onClick={() => handleAddAnotherCity(cityId)}>{CITY_NAMES[cityId]}</Button>;
                })
            }
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={styles.buttonSubmit} type={'primary'} disabled={!isChanged} onClick={handleSetActiveCities}>Save</Button>
            </div>
        </Drawer>
    );
};
