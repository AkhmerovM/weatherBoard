import React from 'react';
import styles from './style.less';

export const RainComponent = () => {
    return <div className={styles.thunder}>
        <canvas className={`${styles.canvas3} canvas3`}></canvas>
        <canvas className={`${styles.canvas1} canvas1`}></canvas>
        <canvas className={`${styles.canvas2} canvas2`}></canvas>
    </div>;
};
