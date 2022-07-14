import React from 'react';
import styles from "./style.less";
type TProps = {
    name: string,
    temperature: number,
}
export const City: React.FC<TProps> = ({name, temperature}) =>   {
    return <div className={styles.boardElement}>
            <div className={styles.top}>
                <div className={styles.title}>
                    {name}
                </div>
                <div className={styles.weather}>
                    {temperature} C
                </div>
            </div>
    </div>
}
