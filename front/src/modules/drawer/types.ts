import { CITY_NAME, TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';
import { PayloadAction } from '@reduxjs/toolkit';

export type CITY_DRAWER = {
    id: PropType<TCity, 'id'>,
    name: keyof typeof CITY_NAME,
}