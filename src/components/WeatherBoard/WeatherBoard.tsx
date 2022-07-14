import React from 'react';
import styles from './style.less';
import {City} from "../City/City";

export function WeatherBoard() {
    return (
        <div className={styles.wrapper}>
            <City name={'Novokuznetsk'} temperature={32}/>
            <City name={'Kazan'} temperature={20}/>
            <City name={'Moscow'} temperature={25}/>
            <City name={'Saint-Petersburg'} temperature={22}/>
        </div>
    );
}
