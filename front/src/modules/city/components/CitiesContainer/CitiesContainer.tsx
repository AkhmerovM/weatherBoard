import { City } from '@/modules/city/components/City';
import React from 'react';
import styles from './style.less';

import { TCity } from '@/modules/city/types';
type CitiesContainerProps = {
    cities: TCity[]
}
export const CitiesContainer: React.FC<CitiesContainerProps> = ({ cities }) => {
    return <div className={styles.container}>
        {cities.map((city, i) => {
            return (<City key={i} city={city}/>);
        })}
    </div>;
};
