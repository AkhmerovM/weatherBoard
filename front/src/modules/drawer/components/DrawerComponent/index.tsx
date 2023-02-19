import React from 'react';
import { Drawer } from 'antd';
import { TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';
import { DrawerContainer } from '@/modules/drawer/components/DrawerContainer';

type DrawerComponentProps = {
    handleClose: () => void,
    isOpen: boolean,
    activeCitiesIds: PropType<TCity, 'id'>[],
    submitSetActiveCities: () => void,
}
export const DrawerComponent: React.FC<DrawerComponentProps> = ({ handleClose, isOpen, activeCitiesIds, submitSetActiveCities }) => {
    return (
        <Drawer title="Города мира" placement="right" onClose={handleClose} open={isOpen} destroyOnClose={true}>
            <DrawerContainer activeCitiesIds={activeCitiesIds} submitSetActiveCities={submitSetActiveCities} />
        </Drawer>
    );
};
