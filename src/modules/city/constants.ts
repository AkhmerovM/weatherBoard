import { CITIES, CITY_URL } from '@/modules/city/types';

export const CITY_IMAGE_URL_MAP: CITY_URL = {
    kazan1: '/images/cities/kazan/kazan1.png',
    kazan2: '/images/cities/kazan/kazan2.jpg',
    kazan3: '/images/cities/kazan/kazan3.jpg',
    novokuznetsk1: '/images/cities/novokuznetsk/novokuznetsk1.png',
    novokuznetsk2: '/images/cities/novokuznetsk/novokuznetsk2.jpg',
    novokuznetsk3: '/images/cities/novokuznetsk/novokuznetsk3.jpg',
    'saint-petersburg1': '/images/cities/saint-petersburg.png',
    'saint-petersburg2': '/images/cities/saint-petersburg.png',
    'saint-petersburg3': '/images/cities/saint-petersburg.png',
    moscow1: '/images/cities/moscow/moscow1.jpeg',
    moscow2: '/images/cities/moscow/moscow2.jpg',
    moscow3: '/images/cities/moscow/moscow3.jpg',
    tumen1: '/images/cities/tumen.png',
    tumen2: '/images/cities/tumen.png',
    tumen3: '/images/cities/tumen.png',
    vladikavkaz1: '/images/cities/vladikavkaz/vladikavkaz1.png',
    vladikavkaz2: '/images/cities/vladikavkaz/vladikavkaz2.jpg',
    vladikavkaz3: '/images/cities/vladikavkaz/vladikavkaz3.jpg',
    'Tomsk Oblast1': '/images/cities/tomsk.jpeg',
    'Tomsk Oblast2': '/images/cities/tomsk.jpeg',
    'Tomsk Oblast3': '/images/cities/tomsk.jpeg',
    berlin1: '/images/cities/berlin.jpeg',
    berlin2: '/images/cities/berlin.jpeg',
    berlin3: '/images/cities/berlin.jpeg',
    prague1: '/images/cities/prague.jpg',
    prague2: '/images/cities/prague.jpg',
    prague3: '/images/cities/prague.jpg',
    helsinki1: '/images/cities/helsinki.jpg',
    helsinki2: '/images/cities/helsinki.jpg',
    helsinki3: '/images/cities/helsinki.jpg',
    default: '/images/cities/moscow.png'
};

export const CITY_NAMES: {[key in keyof typeof CITIES]: string} = {
    kazan: 'Казань',
    novokuznetsk: 'Новокузнецк',
    'saint-petersburg': 'Санкт-Петербург',
    moscow: 'Москва',
    tumen: 'Тюмень',
    vladikavkaz: 'Владикавказ',
    'Tomsk Oblast': 'Томск',
    berlin: 'Берлин',
    prague: 'Прага',
    helsinki: 'Хельсинки'
};
