import React, { useState } from 'react';
import { ALL_CITIES_IN_DRAWER, DEFAULT_CITIES_IN_DRAWER } from '@/modules/drawer/constants';
import { Button, Divider, Drawer } from 'antd';
import { CITY_NAMES } from '@/modules/city/constants';
import { CITIES, TCity } from '@/modules/city/types';
import { CITY_DRAWER } from '@/modules/drawer/types';
import { PropType } from '@/modules/common/types';

type DrawerComponentProps = {
    handleClose: () => void,
    isOpen: boolean,
    activeCitiesIds: PropType<TCity, 'id'>[],
}
export const DrawerComponent: React.FC<DrawerComponentProps> = ({ handleClose, isOpen, activeCitiesIds }) => {
    const [activeCities, setActiveCities] = useState<PropType<TCity, 'id'>[]>(activeCitiesIds);
    const anotherCitiesIds = Object.keys(ALL_CITIES_IN_DRAWER).filter((id) => {
        return activeCitiesIds.find((el) => el === +id);
    }).map(id => +id);
    const [anotherCities, setAnotherCities] = useState<PropType<TCity, 'id'>[]>(anotherCitiesIds);

    const handleAdd = (e: any) => {
        console.log(e);
    };
    return (
        <Drawer title="Basic Drawer" placement="right" onClose={handleClose} open={isOpen}>
            <div>
                <span>Active Cities</span>
                {
                    activeCities.map((element, index) => {
                        return <span style={{ marginLeft: 10 }}><Button key={index} >{}</Button></span>;
                    })
                }
            </div>
            <Divider/>
            {
                anotherCities.map((element, index) => {
                    return <span style={{ marginLeft: 10 }}>
                        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
                        <Button key={index} onClick={() => {}}>cityName</Button>
                    </span>;
                })
            }
        </Drawer>
    );
};
