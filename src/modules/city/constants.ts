import { CITIES, CITY_URL } from '@/modules/city/types';

export const CITY_IMAGE_URL_MAP: CITY_URL = {
    'Kazan’1': '/images/cities/kazan/kazan1.png',
    'Kazan’2': '/images/cities/kazan/kazan2.jpg',
    'Kazan’3': '/images/cities/kazan/kazan3.jpg',
    Novokuznetsk1: '/images/cities/novokuznetsk/novokuznetsk1.png',
    Novokuznetsk2: '/images/cities/novokuznetsk/novokuznetsk2.jpg',
    Novokuznetsk3: '/images/cities/novokuznetsk/novokuznetsk3.jpg',
    'Saint Petersburg1': '/images/cities/saint-petersburg.png',
    'Saint Petersburg2': '/images/cities/saint-petersburg.png',
    'Saint Petersburg3': '/images/cities/saint-petersburg.png',
    Moscow1: '/images/cities/moscow/moscow1.jpeg',
    Moscow2: '/images/cities/moscow/moscow2.jpg',
    Moscow3: '/images/cities/moscow/moscow3.jpg',
    Tumen1: '/images/cities/tumen.png',
    Tumen2: '/images/cities/tumen.png',
    Tumen3: '/images/cities/tumen.png',
    Vladikavkaz1: '/images/cities/vladikavkaz/vladikavkaz1.png',
    Vladikavkaz2: '/images/cities/vladikavkaz/vladikavkaz2.jpg',
    Vladikavkaz3: '/images/cities/vladikavkaz/vladikavkaz3.jpg',
    Tomsk1: '/images/cities/tomsk.jpeg',
    Tomsk2: '/images/cities/tomsk.jpeg',
    Tomsk3: '/images/cities/tomsk.jpeg',
    Berlin1: '/images/cities/berlin.jpeg',
    Berlin2: '/images/cities/berlin.jpeg',
    Berlin3: '/images/cities/berlin.jpeg',
    Prague1: '/images/cities/prague.jpg',
    Prague2: '/images/cities/prague.jpg',
    Prague3: '/images/cities/prague.jpg',
    Helsinki1: '/images/cities/helsinki.jpg',
    Helsinki2: '/images/cities/helsinki.jpg',
    Helsinki3: '/images/cities/helsinki.jpg',
    default: '/images/cities/moscow.png'
};

export const CITY_NAMES: {[key in keyof typeof CITIES]: string} = {
    'Kazan’': 'Казань',
    Novokuznetsk: 'Новокузнецк',
    'Saint Petersburg': 'Санкт-Петербург',
    Moscow: 'Москва',
    Tumen: 'Тюмень',
    Vladikavkaz: 'Владикавказ',
    Tomsk: 'Томск',
    Berlin: 'Берлин',
    Prague: 'Прага',
    Helsinki: 'Хельсинки'
};
