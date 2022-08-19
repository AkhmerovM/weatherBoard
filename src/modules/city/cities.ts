import { CITIES, WEATHER_ICONS, TCity } from './types';

export const cities: TCity[] = [
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
                icon: WEATHER_ICONS['01d']
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
                icon: WEATHER_ICONS['02d']
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
                icon: WEATHER_ICONS['03d']
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
                icon: WEATHER_ICONS['04d']
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
                icon: WEATHER_ICONS['09d']
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
                main: 'Clouds',
                description: 'overcast clouds',
                icon: WEATHER_ICONS['10d']
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
    {
        coord: { lon: 82.5, lat: 58.5 },
        weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: WEATHER_ICONS['11d'] }],
        base: 'stations',
        main: {
            temp: 12.68,
            feels_like: 11.75,
            temp_min: 12.68,
            temp_max: 12.68,
            pressure: 1014,
            humidity: 67,
            sea_level: 1014,
            grnd_level: 1007
        },
        visibility: 10000,
        wind: { speed: 2.82, deg: 306, gust: 6.61 },
        clouds: { all: 100 },
        dt: 1660826583,
        sys: { country: 'RU', sunrise: 1660777023, sunset: 1660831869 },
        timezone: 25200,
        id: 1489421,
        name: 'Tomsk Oblast',
        cod: 200
    },
    {
        coord: { lon: 82.5, lat: 58.5 },
        weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: WEATHER_ICONS['13d'] }],
        base: 'stations',
        main: {
            temp: 12.68,
            feels_like: 11.75,
            temp_min: 12.68,
            temp_max: 12.68,
            pressure: 1014,
            humidity: 67,
            sea_level: 1014,
            grnd_level: 1007
        },
        visibility: 10000,
        wind: { speed: 2.82, deg: 306, gust: 6.61 },
        clouds: { all: 100 },
        dt: 1660826583,
        sys: { country: 'RU', sunrise: 1660777023, sunset: 1660831869 },
        timezone: 25200,
        id: 1489421,
        name: 'Tomsk Oblast',
        cod: 200
    },
    {
        coord: { lon: 82.5, lat: 58.5 },
        weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: WEATHER_ICONS['50d'] }],
        base: 'stations',
        main: {
            temp: 12.68,
            feels_like: 11.75,
            temp_min: 12.68,
            temp_max: 12.68,
            pressure: 1014,
            humidity: 67,
            sea_level: 1014,
            grnd_level: 1007
        },
        visibility: 10000,
        wind: { speed: 2.82, deg: 306, gust: 6.61 },
        clouds: { all: 100 },
        dt: 1660826583,
        sys: { country: 'RU', sunrise: 1660777023, sunset: 1660831869 },
        timezone: 25200,
        id: 1489421,
        name: 'Tomsk Oblast',
        cod: 200
    }
];
