export enum ICONS {
    '04d'= '04d',
    '10d'= '10d'
}
export enum WEATHER_NAME {
    CLOUDS = 'Clouds',
    RAIN = 'Rain'
}
export enum CITIES_NAMES {
    novokuznetsk = 'Novokuznetsk',
    moscow = 'Moscow',
    kazan = 'Kazan',
    'saint-petersburg' = 'Saint-petersburg'
}
export enum CITIES {
    novokuznetsk = 'novokuznetsk',
    moscow = 'moscow',
    kazan = 'kazan',
    vladikavkaz = 'vladikavkaz',
    tumen = 'tumen',
    'saint-petersburg' = 'saint-petersburg'
}

export type TCity = {
    coord: {
        lon: number,
        lat: number
    },
    visibility: number,
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    base: string
    timezone: number,
    id: number,
    name: CITIES,
    cod: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number
    },
    wind: {
        speed: number,
        deg: number,
        gust: number
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
            main: WEATHER_NAME,
            description: string,
            icon: ICONS
        }
    ]
}
