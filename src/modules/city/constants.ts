import { CITIES } from '@/modules/city/types';

type CITY_URL = {
    [key in keyof typeof CITIES]: string;
} & {default: string};

export const CITY_IMAGE_URL_MAP: CITY_URL = {
    kazan: '/images/cities/kazan.png',
    novokuznetsk: '/images/cities/novokuznetsk.png',
    'saint-petersburg': '/images/cities/saint-petersburg.png',
    moscow: '/images/cities/moscow.jpeg',
    tumen: '/images/cities/tumen.png',
    vladikavkaz: '/images/cities/vladikavkaz.png',
    default: '/images/cities/moscow.png'
};

export const CITY_NAMES: {[key in keyof typeof CITIES]: string} = {
    kazan: 'Казань',
    novokuznetsk: 'Новокузнецк',
    'saint-petersburg': 'Санкт-Петербург',
    moscow: 'Москва',
    tumen: 'Тюмень',
    vladikavkaz: 'Владикавказ'
};
