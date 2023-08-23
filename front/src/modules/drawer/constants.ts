import { CITY_DRAWER } from '@/modules/drawer/types';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';
export const CITY_IDS_LS = 'cityIds';
export const DRAWER_CITIES: {
    [key: PropType<TCity, 'id'>]: CITY_DRAWER
} = {
    1496990: {
        name: 'Novokuznetsk',
        id: 1496990
    },
    473249: {
        name: 'Vladikavkaz',
        id: 473249
    },
    1489425: {
        name: 'Tomsk',
        id: 1489425
    },
    551487: {
        name: 'Kazan’',
        id: 551487
    },
    2034340: {
        name: 'Tumen',
        id: 2034340
    },
    498817: {
        name: 'Saint Petersburg',
        id: 498817
    },
    524901: {
        name: 'Moscow',
        id: 524901
    },
    3067696: {
        name: 'Prague',
        id: 3067696
    },
    2950159: {
        name: 'Berlin',
        id: 2950159
    },
    658225: {
        name: 'Helsinki',
        id: 658225
    },
    3435910: {
        name: 'Buenos Aires',
        id: 3435910
    },
    1526384: {
        name: 'Almaty',
        id: 1526384
    },
    2147714: {
        name: 'Sydney',
        id: 2147714
    },
    2267057: {
        name: 'Lisbon',
        id: 2267057
    },
    1248991: {
        name: 'Colombo',
        id: 1248991
    }
};

export const DEFAULT_DRAWER_CITIES: {
    [key: PropType<TCity, 'id'>]: CITY_DRAWER
} = {
    1496990: { name: 'Novokuznetsk', id: 1496990 },
    473249: { name: 'Vladikavkaz', id: 473249 },
    551487: {
        name: 'Kazan’',
        id: 551487
    },
    1489425: {
        name: 'Tomsk',
        id: 1489425
    }
};
export const DRAWER_CITY_SVG_URL_MAP: {[key: number] : string} = {
    1496990: '/assets/images/flags/russia.svg',
    473249: '/assets/images/flags/russia.svg',
    1489425: '/assets/images/flags/russia.svg',
    551487: '/assets/images/flags/russia.svg',
    2034340: '/assets/images/flags/russia.svg',
    498817: '/assets/images/flags/russia.svg',
    524901: '/assets/images/flags/russia.svg',
    3067696: '/assets/images/flags/czech.svg',
    2950159: '/assets/images/flags/germany.svg',
    658225: '/assets/images/flags/finland.svg',
    2267057: '/assets/images/flags/portugal.svg',
    2147714: '/assets/images/flags/australia.svg',
    1526384: '/assets/images/flags/kazakhstan.svg',
    3435910: '/assets/images/flags/argentina.svg',
    1248991: '/assets/images/flags/sri.svg'
};
