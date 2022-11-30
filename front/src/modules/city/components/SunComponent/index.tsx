import React from 'react';
import styles from './style.less';

export const SunComponent = () => {
    return (
        <div className={styles.sun}>
            <div className={styles.ray_box}>
                <div className={`${styles.ray1} global-ray`}></div>
                <div className={`${styles.ray2} global-ray`}></div>
                <div className={`${styles.ray3} global-ray`}></div>
                <div className={`${styles.ray4} global-ray`}></div>
                <div className={`${styles.ray5} global-ray`}></div>
                <div className={`${styles.ray6} global-ray`}></div>
                <div className={`${styles.ray7} global-ray`}></div>
                <div className={`${styles.ray8} global-ray`}></div>
                <div className={`${styles.ray9} global-ray`}></div>
                <div className={`${styles.ray10} global-ray`}></div>
            </div>
        </div>
    );
};
