import React from 'react';
import styles from './style.less';
import { getCityBgStyle, getTimeZoneTime } from '@/modules/city/utils';
import { TCity } from '@/modules/city/types';
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
            <div style={getCityBgStyle(name)}/>
            <div className={styles.container} >
                <div className={styles.top}>
                    <div className={styles.title}>
                        <h2>{name}</h2>
                    </div>
                    <div className={styles.time}>
                        <h3>  {formattedTime}</h3>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h3> {temperature} {' '} C</h3>
                </div>
            </div>
        </div>;
    }
}
