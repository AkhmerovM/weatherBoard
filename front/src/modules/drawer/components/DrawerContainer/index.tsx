import React, { useMemo, useState } from 'react';
import { DRAWER_CITIES, DRAWER_CITY_SVG_URL_MAP } from '@/modules/drawer/constants';
import { Button, Divider } from 'antd';
import { CITY_NAMES } from '@/modules/city/constants';
import { TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { fetchCities } from '@/modules/city/api';
import { LocalStorageService } from '@/modules/drawer/services/localStorage';
import styles from './style.less';

type DrawerContainerProps = {
    activeCitiesIds: PropType<TCity, 'id'>[],
    submitSetActiveCities: () => void,
}
export const DrawerContainer: React.FC<DrawerContainerProps> = ({ activeCitiesIds, submitSetActiveCities }) => {
    const [activeCities, setActiveCities] = useState<PropType<TCity, 'id'>[]>(activeCitiesIds);

    const anotherCitiesIds = useMemo(() => Object.keys(DRAWER_CITIES).filter((id) => {
        return !activeCitiesIds.find((el) => el === +id);
    }).map(id => +id), [activeCitiesIds]);

    const [anotherCities, setAnotherCities] = useState<PropType<TCity, 'id'>[]>(anotherCitiesIds);
    const [isChanged, setIsChanged] = useState(false);

    const dispatch: AppDispatch = useDispatch();

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
        <>
            <h4 style={{ marginBottom: 10 }}>Активные города</h4>
            <div style={{ marginLeft: -10 }}>
                {
                    activeCities.map((cityId) => {
                        return <Button className={styles.buttonCityName} key={cityId} onClick={() => handleAddActiveCity(cityId)}>
                            <span>{CITY_NAMES[cityId]}</span>
                            <img className={styles.buttonImage} src={DRAWER_CITY_SVG_URL_MAP[cityId]} alt={'flag'} />
                        </Button>;
                    })
                }
            </div>
            <Divider/>
            <h4 style={{ marginBottom: 10 }}>Неактивные города</h4>
            {
                anotherCities.map((cityId) => {
                    return <Button className={styles.buttonCityName} key={cityId} onClick={() => handleAddAnotherCity(cityId)}>
                        <span>{CITY_NAMES[cityId]}</span>
                        <img className={styles.buttonImage} src={DRAWER_CITY_SVG_URL_MAP[cityId]} alt={'flag'} />
                    </Button>;
                })
            }
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={styles.buttonSubmit} type={'primary'} disabled={!isChanged} onClick={handleSetActiveCities}>Save</Button>
            </div>
        </>
    );
};
