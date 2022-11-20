import React from 'react';
import styles from './style.less';

export const CloudComponent = () => {
    return (
        <div className={styles.cloud}>
            <img src='/images/clouds/cloud-01.png' alt='' className={styles.cloud1} />
            <img src='/images/clouds/cloud-04.png' alt='' className={styles.cloud4} />
        </div>
    );
};
