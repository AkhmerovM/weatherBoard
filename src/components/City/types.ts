type TCity = {
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number,
        "sea_level": number,
        "grnd_level": number
    },
    "wind": {
        "speed": number,
        "deg": number,
        "gust": number
    },
    "clouds": {
        "all": number
    },
    "weather": [
        {
            "id": number,
            "main": WEATHER_NAME,
            "description": string,
            "icon": ICONS
        }
    ]
}
enum ICONS {
    "04d"= "04d"
}
enum WEATHER_NAME {
    CLOUDS = "Clouds"
}
enum CITIES {
    NOVOKUZNETSK = "Novokuznetsk"
}
