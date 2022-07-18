import React from 'react';
import styles from './style.less';
import { useSelector } from 'react-redux';
import { AppState } from '@/store/store';
import { City } from '@/modules/city/components/City';

export function WeatherBoard () {
    const cities = useSelector((state: AppState) => state.cities.data);
    return (
        <div className={styles.wrapper}>
            {cities.map((city) => {
                const { name, main: { temp } } = city;
                return (<City name={name} temperature={temp} />);
            })}
        </div>
    );
}
