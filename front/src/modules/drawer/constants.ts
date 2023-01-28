import { CITY_DRAWER } from '@/modules/drawer/types';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';

export const ALL_CITIES_IN_DRAWER: {
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
    }
};

export const DEFAULT_CITIES_IN_DRAWER: {
    [key: PropType<TCity, 'id'>]: CITY_DRAWER
} = {
    1496990: { name: 'Novokuznetsk', id: 1496990 },
    473249: { name: 'Vladikavkaz', id: 473249 },
    1489425: {
        name: 'Tomsk',
        id: 1489425
    },
    551487: {
        name: 'Kazan’',
        id: 551487
    }
};
