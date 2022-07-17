import React from 'react';
import styles from "./style.less";
type TProps = {
    name: string,
    temperature: number,
}
export const City: React.FC<TProps> = ({name, temperature}) =>   {
    return <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.title}>
                    {name}
                </div>
                <div className={styles.time}>
                    12:25
                </div>
            </div>

        <div className={styles.bottom}>
            {temperature} {" "} C
        </div>
    </div>
}
