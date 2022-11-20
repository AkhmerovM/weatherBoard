import React, { useEffect } from 'react';
import styles from './style.less';
import { options } from './constants';

export const SnowComponent = () => {
    const ref = React.createRef<HTMLDivElement>();
    useEffect(() => {
        if (mySparticles) {
            new (mySparticles.Sparticles as any)(ref.current, options);
        }
    },
    []);
    return <div ref={ref} className={`${styles.falling} falling`} />;
};
