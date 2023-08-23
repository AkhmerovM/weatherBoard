import React from 'react';
import { DRAWER_CITY_SVG_URL_MAP } from '@/modules/drawer/constants';
import { Button } from 'antd';
import { CITY_NAMES } from '@/modules/city/constants';
import { TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';
import styles from './style.less';

type DrawerContainerProps = {
    citiesIds: PropType<TCity, 'id'>[],
    cityOnclick: (cityId: PropType<TCity, 'id'>) => void,
    title: string
}
export const DrawerCitiesContainer: React.FC<DrawerContainerProps> = ({ citiesIds, cityOnclick, title }) => {
    return (
        <>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.container}>
                {
                    citiesIds.map((cityId) => {
                        return <Button className={styles.buttonCityName} key={cityId} onClick={() => cityOnclick(cityId)}>
                            <span>{CITY_NAMES[cityId]}</span>
                            <img className={styles.buttonImage} src={DRAWER_CITY_SVG_URL_MAP[cityId]} alt={'flag'} />
                        </Button>;
                    })
                }
            </div>
        </>
    );
};
