export enum WEATHER_ICONS {
    '01d'= '01d',
    '02d'= '02d',
    '03d'= '03d',
    '04d'= '04d',
    '09d'= '09d',
    '10d'= '10d',
    '11d'= '11d',
    '13d'= '13d',
    '50d'= '50d'
}
export enum WEATHER_NAME {
    Clouds = 'Clouds',
    Rain = 'Rain'
}
export enum CITIES {
    novokuznetsk = 'novokuznetsk',
    moscow = 'moscow',
    kazan = 'kazan',
    vladikavkaz = 'vladikavkaz',
    tumen = 'tumen',
    'saint-petersburg' = 'saint-petersburg',
    'Tomsk Oblast' = 'Tomsk Oblast'
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
            main: keyof typeof WEATHER_NAME,
            description: string,
            icon: keyof typeof WEATHER_ICONS
        }
    ]
}
