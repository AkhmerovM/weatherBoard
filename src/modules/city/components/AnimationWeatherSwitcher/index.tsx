import React, { memo } from 'react';
import { WEATHER_NAME } from '@/modules/city/types';
import styles from './style.less';
import { RainComponent } from '@/modules/city/components/RainComponent';
import { CloudComponent } from '@/modules/city/components/CloudComponent';
import { SnowComponent } from '@/modules/city/components/SnowComponent';

type TProps ={
    weatherName: keyof typeof WEATHER_NAME,
}
export const AnimationWeatherSwitcher: React.FC<TProps> = memo(({ weatherName }) => {
    return <div className={styles.container}>
        {weatherName === WEATHER_NAME.Clouds && <CloudComponent />}
        {weatherName === WEATHER_NAME.Rain && <RainComponent />}
        {weatherName === WEATHER_NAME.Snow && <SnowComponent />}
    </div>;
});
