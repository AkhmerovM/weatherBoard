import { CITIES, TCity } from './types';

export const cities: TCity[] = [
    {
        coord: {
            lon: 87.1099,
            lat: 53.7557
        },
        weather: [
            {
                id: 804,
                main: 'Snow',
                description: 'overcast clouds',
                icon: '01d'
            }
        ],
        base: 'stations',
        main: {
            temp: 21.22,
            feels_like: 20.44,
            temp_min: 21.22,
            temp_max: 21.22,
            pressure: 1014,
            humidity: 40,
            sea_level: 1014,
            grnd_level: 990
        },
        visibility: 10000,
        wind: {
            speed: 0.96,
            deg: 55,
            gust: 0.87
        },
        clouds: {
            all: 87
        },
        dt: 1657863236,
        sys: {
            type: 2,
            id: 69385,
            country: 'RU',
            sunrise: 1657835969,
            sunset: 1657895703
        },
        timezone: 25200,
        id: 1496990,
        name: CITIES.novokuznetsk,
        cod: 200
    },
    {
        coord: {
            lon: 87.1099,
            lat: 53.7557
        },
        weather: [
            {
                id: 804,
                main: 'Rain',
                description: 'overcast clouds',
                icon: '02d'
            }
        ],
        base: 'stations',
        main: {
            temp: 22,
            feels_like: 20.44,
            temp_min: 21.22,
            temp_max: 21.22,
            pressure: 1014,
            humidity: 40,
            sea_level: 1014,
            grnd_level: 990
        },
        visibility: 10000,
        wind: {
            speed: 0.96,
            deg: 55,
            gust: 0.87
        },
        clouds: {
            all: 87
        },
        dt: 1657863236,
        sys: {
            type: 2,
            id: 69385,
            country: 'RU',
            sunrise: 1657835969,
            sunset: 1657895703
        },
        timezone: 18000,
        id: 1496990,
        name: CITIES.tumen,
        cod: 200
    },
    {
        coord: {
            lon: 87.1099,
            lat: 53.7557
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '03d'
            }
        ],
        base: 'stations',
        main: {
            temp: 21.22,
            feels_like: 20.44,
            temp_min: 21.22,
            temp_max: 21.22,
            pressure: 1014,
            humidity: 40,
            sea_level: 1014,
            grnd_level: 990
        },
        visibility: 10000,
        wind: {
            speed: 0.96,
            deg: 55,
            gust: 0.87
        },
        clouds: {
            all: 87
        },
        dt: 1657863236,
        sys: {
            type: 2,
            id: 69385,
            country: 'RU',
            sunrise: 1657835969,
            sunset: 1657895703
        },
        timezone: 10800,
        id: 1496990,
        name: CITIES.vladikavkaz,
        cod: 200
    },
    {
        coord: {
            lon: 87.1099,
            lat: 53.7557
        },
        weather: [
            {
                id: 804,
                main: 'Rain',
                description: 'overcast clouds',
                icon: '04d'
            }
        ],
        base: 'stations',
        main: {
            temp: 24,
            feels_like: 20.44,
            temp_min: 21.22,
            temp_max: 21.22,
            pressure: 1014,
            humidity: 40,
            sea_level: 1014,
            grnd_level: 990
        },
        visibility: 10000,
        wind: {
            speed: 0.96,
            deg: 55,
            gust: 0.87
        },
        clouds: {
            all: 87
        },
        dt: 1657863236,
        sys: {
            type: 2,
            id: 69385,
            country: 'RU',
            sunrise: 1657835969,
            sunset: 1657895703
        },
        timezone: 10800,
        id: 1496990,
        name: CITIES['saint-petersburg'],
        cod: 200
    },
    {
        coord: {
            lon: 49.1221,
            lat: 55.7887
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '09d'
            }
        ],
        base: 'stations',
        main: {
            temp: 20.34,
            feels_like: 20.7,
            temp_min: 19.34,
            temp_max: 20.34,
            pressure: 1004,
            humidity: 87,
            sea_level: 1004,
            grnd_level: 997
        },
        visibility: 10000,
        wind: {
            speed: 5.66,
            deg: 233,
            gust: 9.15
        },
        rain: {
            '1h': 0.34
        },
        clouds: {
            all: 94
        },
        dt: 1657890957,
        sys: {
            type: 2,
            id: 48937,
            country: 'RU',
            sunrise: 1657844355,
            sunset: 1657905553
        },
        timezone: 10800,
        id: 551487,
        name: CITIES.kazan,
        cod: 200
    },
    {
        coord: {
            lon: 37.6156,
            lat: 55.7522
        },
        weather: [
            {
                id: 804,
                main: 'Clear',
                description: 'overcast clouds',
                icon: '10d'
            }
        ],
        base: 'stations',
        main: {
            temp: 22.93,
            feels_like: 22.27,
            temp_min: 22.02,
            temp_max: 24.13,
            pressure: 1007,
            humidity: 38,
            sea_level: 1007,
            grnd_level: 990
        },
        visibility: 10000,
        wind: {
            speed: 5.94,
            deg: 275,
            gust: 7.22
        },
        clouds: {
            all: 91
        },
        dt: 1657890391,
        sys: {
            type: 1,
            id: 9027,
            country: 'RU',
            sunrise: 1657847134,
            sunset: 1657908298
        },
        timezone: 10800,
        id: 524901,
        name: CITIES.moscow,
        cod: 200
    },
    { coord: { lon: 13.4105, lat: 52.5244 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '11d' }], base: 'stations', main: { temp: 24.3, feels_like: 24.12, temp_min: 22.78, temp_max: 26.15, pressure: 1013, humidity: 51 }, visibility: 10000, wind: { speed: 4.63, deg: 280 }, clouds: { all: 0 }, dt: 1661090180, sys: { type: 2, id: 2011538, country: 'DE', sunrise: 1661054321, sunset: 1661106047 }, timezone: 7200, id: 2950159, name: 'berlin', cod: 200 },
    { coord: { lon: 14.4208, lat: 50.088 }, weather: [{ id: 800, main: 'Snow', description: 'clear sky', icon: '13d' }], base: 'stations', main: { temp: 19.98, feels_like: 19.7, temp_min: 17.93, temp_max: 21.75, pressure: 1014, humidity: 64 }, visibility: 10000, wind: { speed: 3.09, deg: 360 }, clouds: { all: 0 }, dt: 1661107482, sys: { type: 2, id: 2010430, country: 'CZ', sunrise: 1661054434, sunset: 1661105450 }, timezone: 7200, id: 3067696, name: 'prague', cod: 200 },
    { coord: { lon: 24.9355, lat: 60.1695 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '50d' }], base: 'stations', main: { temp: 21.77, feels_like: 21.93, temp_min: 21.45, temp_max: 22.21, pressure: 1012, humidity: 74 }, visibility: 10000, wind: { speed: 6.17, deg: 120 }, clouds: { all: 0 }, dt: 1661107362, sys: { type: 2, id: 20457, country: 'FI', sunrise: 1661050078, sunset: 1661104759 }, timezone: 10800, id: 658225, name: 'helsinki', cod: 200 }
];
