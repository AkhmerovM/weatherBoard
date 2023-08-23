import React, { ReactNode } from 'react';
import { ErrorComponent } from '@/modules/city/components/ErrorComponent';
import styles from './style.less';

type TProps = {
    children: ReactNode
}
type TState = {
    error: Error,
}
export class ErrorBoundary extends React.Component<TProps, TState> {
    constructor (props: TProps) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError (error: Error) {
        return { error };
    }

    render () {
        const { error } = this.state;
        if (error) {
            return <div className={styles.centerContainer}>
                <ErrorComponent error={error} />
            </div>;
        }

        return this.props.children;
    }
}
