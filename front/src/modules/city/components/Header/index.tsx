import styles from './style.less';
import { Button } from 'antd';
import React, { useCallback, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { DrawerComponent } from '@/modules/drawer/components/DrawerComponent';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';

type HeaderProps = {
    activeCitiesIds: PropType<TCity, 'id'>[]
}
export const Header: React.FC<HeaderProps> = ({ activeCitiesIds }) => {
    const [open, setOpen] = useState(true);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>weatherBoard</div>
            <div className={styles.buttonContainer}>
                <Button type={'ghost'} className={styles.menuButton} icon={<MenuOutlined />} onClick={handleOpen}></Button>
            </div>
            <DrawerComponent submitSetActiveCities={handleClose} activeCitiesIds={activeCitiesIds} handleClose={handleClose} isOpen={open} />
        </div>
    );
};
