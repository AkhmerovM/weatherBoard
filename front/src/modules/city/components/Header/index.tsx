import styles from './style.less';
import { Button } from 'antd';
import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

type HeaderProps = {
    onClick: () => void
}
export const Header: React.FC<HeaderProps> = ({ onClick }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>weatherBoard</div>
            <div className={styles.buttonContainer}>
                <Button type={'ghost'} className={styles.menuButton} icon={<MenuOutlined />} onClick={onClick}></Button>
            </div>
        </div>
    );
};
