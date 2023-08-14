import React from 'react';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';
import { connect } from 'react-redux';
import { pollCities } from '@/modules/city/api';
import { AppDispatch } from '@/store/store';

type PollingComponentProps = {
    cityIds: PropType<TCity, 'id'>[],
    tick: (cityIds: PropType<TCity, 'id'>[]) => undefined,
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        tick: (cityIds: PropType<TCity, 'id'>[]) => dispatch(pollCities(cityIds))
    };
};
export class Polling extends React.Component<PollingComponentProps> {
    private interval: NodeJS.Timer;

    componentDidMount () {
        this.interval = setInterval(this.tick, 7000);
    }

    tick = () => {
        const { tick, cityIds } = this.props;
        tick(cityIds);
    };

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render (): null {
        return null;
    }
}
export const PollingComponent = connect(null, mapDispatchToProps)(Polling);
