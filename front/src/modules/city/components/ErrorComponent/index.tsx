import styles from './style.less';
import React from 'react';
type TProps = {
    error: Error
}
export const ErrorComponent: React.FC<TProps> = ({ error }) => {
    return (
        <div className={styles.errorContainer}>
            <div>{error.name}</div>
            <div>{error.message}</div>
        </div>
    );
};
