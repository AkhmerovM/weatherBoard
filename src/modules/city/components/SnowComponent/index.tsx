import React, { useEffect } from 'react';
import styles from './style.less';
import { options } from './constants';

export const SnowComponent = () => {
    const ref = React.createRef<HTMLDivElement>();
    useEffect(() => {
        if (sparticles) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.mySparticles = new sparticles.Sparticles(ref.current, options);
        }
    }, []);
    return <div ref={ref} className={`${styles.falling} falling`} />;
};
