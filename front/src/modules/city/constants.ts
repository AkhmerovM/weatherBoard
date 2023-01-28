import { CITY_URL, TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';

export const CITY_IMAGE_URL_MAP: CITY_URL = {
    'Kazan’1': '/images/cities/kazan/kazan1.png',
    'Kazan’2': '/images/cities/kazan/kazan2.jpg',
    'Kazan’3': '/images/cities/kazan/kazan3.jpg',
    Novokuznetsk1: '/images/cities/novokuznetsk/novokuznetsk1.png',
    Novokuznetsk2: '/images/cities/novokuznetsk/novokuznetsk2.jpg',
    Novokuznetsk3: '/images/cities/novokuznetsk/novokuznetsk3.jpg',
    'Saint Petersburg1': '/images/cities/saint-petersburg/saint-petersburg1.png',
    'Saint Petersburg2': '/images/cities/saint-petersburg/saint-petersburg2.jpg',
    'Saint Petersburg3': '/images/cities/saint-petersburg/saint-petersburg3.jpg',
    Moscow1: '/images/cities/moscow/moscow1.jpeg',
    Moscow2: '/images/cities/moscow/moscow2.jpg',
    Moscow3: '/images/cities/moscow/moscow3.jpg',
    Tumen1: '/images/cities/tumen/tumen1.png',
    Tumen2: '/images/cities/tumen/tumen2.jpg',
    Tumen3: '/images/cities/tumen/tumen3.jpg',
    Vladikavkaz1: '/images/cities/vladikavkaz/vladikavkaz1.png',
    Vladikavkaz2: '/images/cities/vladikavkaz/vladikavkaz2.jpg',
    Vladikavkaz3: '/images/cities/vladikavkaz/vladikavkaz3.jpg',
    Tomsk1: '/images/cities/tomsk/tomsk1.jpeg',
    Tomsk2: '/images/cities/tomsk/tomsk2.jpg',
    Tomsk3: '/images/cities/tomsk/tomsk3.jpg',
    Berlin1: '/images/cities/berlin/berlin1.jpeg',
    Berlin2: '/images/cities/berlin/berlin2.jpg',
    Berlin3: '/images/cities/berlin/berlin3.jpg',
    Prague1: '/images/cities/prague/prague1.jpg',
    Prague2: '/images/cities/prague/prague2.jpg',
    Prague3: '/images/cities/prague/prague3.jpg',
    Helsinki1: '/images/cities/helsinki/helsinki1.jpg',
    Helsinki2: '/images/cities/helsinki/helsinki2.png',
    Helsinki3: '/images/cities/helsinki/helsinki3.jpg',
    default: '/images/cities/moscow/moscow1.jpeg'
};

export const CITY_NAMES: {[key: PropType<TCity, 'id'>]: string} = {
    1496990: 'Новокузнецк',
    473249: 'Владикавказ',
    1489425: 'Томск',
    551487: 'Казань',
    2034340: 'Тюмень',
    498817: 'Санкт-Петербург',
    524901: 'Москва',
    3067696: 'Прага',
    2950159: 'Берлин',
    658225: 'Хельсинки'
};