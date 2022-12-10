import styles from './style.less';
import React from 'react';
type ErrorComponentProps = {
    error: Error
}
export const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
    return (
        <div className={styles.errorContainer}>
            <div>{error.name}</div>
            <div>{error.message}</div>
        </div>
    );
};
