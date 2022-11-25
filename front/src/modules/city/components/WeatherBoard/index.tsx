import React, { useEffect } from 'react';
import styles from './style.less';
import { City } from '@/modules/city/components/City';
import { SunLoader } from '@/modules/city/components/SunLoader';
import { useSelectCities } from '@/modules/city/selectors';
import { useDispatch } from 'react-redux';
import { fetchCities } from '@/modules/city/api';

export function WeatherBoard () {
    const dispatch = useDispatch();
    const cities = useSelectCities();
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(fetchCities());
    }, []);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'rainEffect.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className={styles.weatherBoard}>
            <div className={styles.title}>weatherBoard</div>
            {cities.length > 0
                ? <div className={styles.wrapper}>
                    <div className={styles.container}>
                        {cities.map((city, i) => {
                            return (<City key={i} city={city}/>);
                        })}
                    </div>
                </div>
                : <div className={styles.loaderContainer}>
                    <SunLoader/>
                </div>}
        </div>
    );
}
