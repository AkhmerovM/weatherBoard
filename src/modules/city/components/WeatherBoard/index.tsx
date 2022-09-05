import React, { useEffect } from 'react';
import styles from './style.less';
import { City } from '@/modules/city/components/City';
import { useSelectCities } from '@/modules/city/selectors';

export function WeatherBoard () {
    const cities = useSelectCities();
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
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {cities.map((city, i) => {
                        return (<City key={i} city={city}/>);
                    })}
                </div>
            </div>
        </div>
    );
}
