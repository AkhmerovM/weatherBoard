import React, { useEffect, useState } from 'react';
import styles from './style.less';
import { City } from '@/modules/city/components/City';
import { SunLoader } from '@/modules/city/components/SunLoader';

export function WeatherBoard () {
    // const cities = useSelectCities();
    const [isLoaded, setIsLoaded] = useState(false);
    const [cities, setCities] = useState([]);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'rainEffect.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    useEffect(() => {
        fetch('http://localhost:8090/cities').then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setCities(data);
                    setIsLoaded(true);
                });
            }
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <div className={styles.weatherBoard}>
            <div className={styles.title}>weatherBoard</div>
            {isLoaded
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
