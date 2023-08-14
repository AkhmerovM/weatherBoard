import { City } from '@/modules/city/components/City';
import React from 'react';
import styles from './style.less';

import { TCity } from '@/modules/city/types';
type CitiesContainerProps = {
    cities: TCity[],
    requestTime: number
}
export const CitiesContainer: React.FC<CitiesContainerProps> = ({ cities, requestTime }) => {
    return <div className={styles.container}>
        {cities.map((city, i) => {
            return (<City requestTime={requestTime} key={i} city={city}/>);
        })}
    </div>;
};
