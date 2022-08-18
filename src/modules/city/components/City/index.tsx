import React from 'react';
import styles from './style.less';
import { getCityImgUrl, getTimeZoneTime } from '@/modules/city/utils';
import { TCity } from '@/modules/city/types';
import { CITY_NAMES } from '@/modules/city/constants';
type TProps = {
    city: TCity,
}
type TState = {
    time: number,
}
export class City extends React.Component<TProps, TState> {
    timerID: NodeJS.Timer;

    constructor (props: TProps) {
        super(props);
        this.state = {
            time: new Date().getTime()
        };
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
        const { city: { timezone, main: { temp }, name } } = this.props;
        const temperature = Math.floor(temp);
        const formattedTime = getTimeZoneTime(time, timezone);
        return <div className={styles.wrapper}>
            <div className={styles.bg}>
                <img src={getCityImgUrl(name)} className={styles.img} alt={'cityName'}/>
            </div>
            <div className={styles.container} >
                <div className={styles.top}>
                    <div className={styles.title}>
                        {CITY_NAMES[name]}
                    </div>
                    <div className={styles.time}>
                        {formattedTime}
                    </div>
                </div>
                <div className={styles.bottom}>
                    {temperature} {' '} C
                </div>
            </div>
        </div>;
    }
}
