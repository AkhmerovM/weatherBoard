import React, { useEffect } from 'react';
import styles from './style.less';

export const RainComponent = () => {
    useEffect(() => {
        if (makeItRainStart) {
            makeItRainStart();
        }
    }, []);
    return <div className={`${styles.rain} rain`}></div>;
};
