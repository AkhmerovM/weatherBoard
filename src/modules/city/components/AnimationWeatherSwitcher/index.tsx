import React, { memo } from 'react';
import { WEATHER_NAME } from '@/modules/city/types';
import styles from './style.less';
import { RainComponent } from '@/modules/city/components/RainComponent';

type TProps ={
    weatherName: keyof typeof WEATHER_NAME,
}
export const AnimationWeatherSwitcher: React.FC<TProps> = memo(() => {
    return <div className={styles.container}>
        <RainComponent />
    </div>;
});
