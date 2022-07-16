import React from 'react';
import styles from './style.less';
import { City } from '../City/City';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';

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
