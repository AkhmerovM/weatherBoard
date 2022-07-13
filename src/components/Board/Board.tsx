import React from 'react';
import styles from './style.less';

export function Board() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.boardElement}>Novokuznetsk</div>
            <div className={styles.boardElement}>Kazan</div>
            <div className={styles.boardElement}>Moscow</div>
            <div className={styles.boardElement}>Saint-Petersburg</div>
        </div>
    );
}
