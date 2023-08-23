import React from 'react';
import styles from './style.less';

export const CloudComponent = () => {
    const cloud1Delay = `${Math.random() * 10}s`;
    const cloud2Delay = `${Math.random() * 10}s`;
    return (
        <div className={styles.cloud}>
            <img style={{ animationDelay: cloud1Delay }} src='/assets/images/clouds/cloud-01.png' alt='' className={styles.cloud1} />
            <img style={{ animationDelay: cloud2Delay }} src='/assets/images/clouds/cloud-04.png' alt='' className={styles.cloud4} />
        </div>
    );
};
