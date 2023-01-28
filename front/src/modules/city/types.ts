type SLIDER_IMAGE_VALUES = 1 | 2 | 3;

export enum CITIES {
    Novokuznetsk = 'novokuznetsk',
    Moscow = 'moscow',
    'Kazan’' = 'kazan',
    Vladikavkaz = 'vladikavkaz',
    Tumen = 'tumen',
    'Saint Petersburg' = 'saint-petersburg',
    'Tomsk' = 'Tomsk',
    'Berlin' = 'Berlin',
    'Prague' = 'Prague',
    'Helsinki' = 'Helsinki'
}

export type CITY_URL_NAMES = `${keyof typeof CITIES}${SLIDER_IMAGE_VALUES}`;
export type CITY_URL = {
    [key in CITY_URL_NAMES]: string;
} & {default: string};

export enum WEATHER_ICONS {
    '01d'= '01d',
    '02d'= '02d',
    '03d'= '03d',
    '04d'= '04d',
    '09d'= '09d',
    '10d'= '10d',
    '11d'= '11d',
    '13d'= '13d',
    '50d'= '50d',
    '01n'= '01n',
    '02n'= '02n',
    '03n'= '03n',
    '04n'= '04n',
    '09n'= '09n',
    '10n'= '10n',
    '11n'= '11n',
    '13n'= '13n',
    '50n'= '50n'
}
export enum WEATHER_NAME {
    Clouds = 'Clouds',
    Rain = 'Rain',
    Clear = 'Clear',
    Snow = 'Snow',
}

export type TCity = {
    coord: {
        lon: number,
        lat: number
    },
    visibility: number,
    dt: number,
    sys: {
        type?: number,
        id?: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    base: string
    timezone: number,
    id: number,
    name: keyof typeof CITIES,
    cod: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level?: number,
        grnd_level?: number
    },
    wind: {
        speed: number,
        deg: number,
        gust?: number
    },
    clouds: {
        all: number
    },
    rain?: {
        '1h': number
    },
    weather: [
        {
            id: number,
            main: keyof typeof WEATHER_NAME,
            description: string,
            icon: keyof typeof WEATHER_ICONS
        }
    ]
}