import React from 'react';
import styles from './style.less';
import { formatTemperatureDegree, getTimeZoneTime } from '@/modules/city/utils';
import { TCity } from '@/modules/city/types';
import { CITY_NAMES } from '@/modules/city/constants';
import { getWeatherIconsStyleClasses } from '@/modules/city/components/City/utils';
import { AnimationWeatherSwitcher } from '@/modules/city/components/AnimationWeatherSwitcher';
import { Slider } from '@/modules/city/components/Slider';
import { DRAWER_CITY_SVG_URL_MAP } from '@/modules/drawer/constants';
type TProps = {
    city: TCity,
    requestTime: number
}
export const City: React.FC<TProps> = ({ city, requestTime }) => {
    const { timezone, main: { temp }, name, weather, id } = city;
    const weatherIcon = weather[0].icon;
    const weatherName = weather[0].main;
    const temperature = formatTemperatureDegree(Math.floor(temp));
    const formattedTime = getTimeZoneTime(requestTime, timezone);
    return <div className={styles.wrapper}>
        <div className={styles.bg}>
            <Slider name={name} />
        </div>
        <div className={styles.container} >
            <AnimationWeatherSwitcher weatherName={weatherName} />
            <div className={styles.top}>
                <div className={styles.title}>
                    <span>{CITY_NAMES[id]}</span>
                    <img className={styles.buttonImage} src={DRAWER_CITY_SVG_URL_MAP[id]} alt={'flag'} />
                </div>
                <div className={styles.time}>
                    {formattedTime}
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={getWeatherIconsStyleClasses(weatherIcon)} />
                <div className={styles.temperature}>{temperature}</div>
            </div>
        </div>
    </div>;
};
