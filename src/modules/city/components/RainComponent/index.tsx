import React, { useEffect } from 'react';
import styles from './style.less';

export const RainComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'rainEffect.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return <div className={styles.thunder}>
        <canvas className={`${styles.canvas3} canvas3`}></canvas>
        <canvas className={`${styles.canvas1} canvas1`}></canvas>
        <canvas className={`${styles.canvas2} canvas2`}></canvas>
    </div>;
};
