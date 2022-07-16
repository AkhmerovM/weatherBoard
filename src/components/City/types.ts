export enum ICONS {
    '04d'= '04d',
    '10d'= '10d'
}
export enum WEATHER_NAME {
    CLOUDS = 'Clouds',
    RAIN = 'Rain'
}
export enum CITIES {
    NOVOKUZNETSK = 'Novokuznetsk',
    MOSCOW = 'Moscow',
    KAZAN = 'Kazan'
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
    'timezone': number,
    'id': number,
    'name': string,
    'cod': number,
    'main': {
        'temp': number,
        'feels_like': number,
        'temp_min': number,
        'temp_max': number,
        'pressure': number,
        'humidity': number,
        'sea_level': number,
        'grnd_level': number
    },
    'wind': {
        'speed': number,
        'deg': number,
        'gust': number
    },
    'clouds': {
        'all': number
    },
    rain?: {
        '1h': number
    },
    'weather': [
        {
            'id': number,
            'main': WEATHER_NAME,
            'description': string,
            'icon': ICONS
        }
    ]
}
