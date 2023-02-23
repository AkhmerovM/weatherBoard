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
type TState = {
    time: number,
}
export class City extends React.Component<TProps, TState> {
    timerID: NodeJS.Timer;

    constructor (props: TProps) {
        super(props);
        this.state = {
            time: this.props.requestTime
        };
    }

    static getDerivedStateFromProps (props: TProps, state: TState): TState {
        console.log('timer');
        if (props.requestTime - state.time > 1000) {
            console.log(props.requestTime - state.time > 1000);
            return {
                time: props.requestTime
            };
        }
        return null;
    }

    componentDidMount () {
        this.timerID = setInterval(() => {
            this.setState((state) => {
                return { time: state.time + 1000 };
            });
        }, 1000);
    }

    componentWillUnmount () {
        clearTimeout(this.timerID);
    }

    render () {
        const { time } = this.state;
        const { city: { timezone, main: { temp }, name, weather, id } } = this.props;
        const weatherIcon = weather[0].icon;
        const weatherName = weather[0].main;
        const temperature = formatTemperatureDegree(Math.floor(temp));
        const formattedTime = getTimeZoneTime(time, timezone);
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
    }
}
