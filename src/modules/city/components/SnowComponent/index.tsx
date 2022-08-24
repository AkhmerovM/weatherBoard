import React, { useEffect } from 'react';
import styles from './style.less';
import { options } from './constants';

export const SnowComponent = () => {
    const ref = React.createRef<HTMLDivElement>();
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    }, []);
    return <div ref={ref} className={`${styles.falling} .falling`} />;
};
