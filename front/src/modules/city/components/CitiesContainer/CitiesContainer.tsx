import { City } from '@/modules/city/components/City';
import React from 'react';
import styles from './style.less';

import { TCity } from '@/modules/city/types';
type TProps = {
    cities: TCity[],
    requestTime: number
}
type TState = {
    time: number,
}
export class CitiesContainer extends React.Component<TProps, TState> {
    timerID: NodeJS.Timer;

    constructor (props: TProps) {
        super(props);
        this.state = {
            time: this.props.requestTime
        };
    }

    componentWillUnmount () {
        clearTimeout(this.timerID);
    }

    componentDidMount () {
        this.timerID = setInterval(() => {
            this.setState((state) => {
                return { time: state.time + 1000 };
            });
        }, 1000);
    }

    static getDerivedStateFromProps (props: TProps, state: TState): TState {
        if (props.requestTime - state.time > 30000) {
            return {
                time: props.requestTime
            };
        }
        return null;
    }

    render () {
        const { cities, requestTime } = this.props;
        return <div className={styles.container}>
            {cities.map((city, i) => {
                return (<City requestTime={requestTime} key={i} city={city}/>);
            })}
        </div>;
    }
}
