import React from 'react';
import styles from './style.less';
import { getTimeZoneTime } from '@/modules/city/utils';
import { TCity } from '@/modules/city/types';
type TProps = {
    city: TCity,
}
export const City: React.FC<TProps> = ({ city }) => {
    const { name, timezone, main: { temp } } = city;
    const time = getTimeZoneTime(timezone);
    return <div className={styles.wrapper}>
        <div className={styles.top}>
            <div className={styles.title}>
                {name}
            </div>
            <div className={styles.time}>
                {time}
            </div>
        </div>

        <div className={styles.bottom}>
            {temp} {' '} C
        </div>
    </div>;
};
