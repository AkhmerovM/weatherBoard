export const ROUTES = {
    city: '/cities',
    front: '/front',
};
export const cities = [
    {"coord":{"lon":87.1099,"lat":53.7557},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":-2.67,"feels_like":-2.67,"temp_min":-2.67,"temp_max":-2.67,"pressure":1029,"humidity":63,"sea_level":1029,"grnd_level":1003},"visibility":10000,"wind":{"speed":1.21,"deg":212,"gust":1.82},"clouds":{"all":100},"dt":1676792763,"sys":{"type":2,"id":69385,"country":"RU","sunrise":1676769837,"sunset":1676806037},"timezone":25200,"id":1496990,"name":"Novokuznetsk","cod":200},
    { coord: { lon: 44.6678, lat: 43.0367 }, weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }], base: 'stations', main: { temp: 33.92, feels_like: 33.18, temp_min: 33.92, temp_max: 33.92, pressure: 1012, humidity: 30 }, visibility: 10000, wind: { speed: 2, deg: 90 }, clouds: { all: 40 }, dt: 1662205423, sys: { type: 2, id: 48794, country: 'RU', sunrise: 1662172062, sunset: 1662219259 }, timezone: 10800, id: 473249, name: 'Vladikavkaz', cod: 200 },
    { coord: { lon: 84.9667, lat: 56.5 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }], base: 'stations', main: { temp: 17.15, feels_like: 16.33, temp_min: 15.53, temp_max: 17.41, pressure: 1008, humidity: 54 }, visibility: 10000, wind: { speed: 5, deg: 150 }, clouds: { all: 0 }, dt: 1662205717, sys: { type: 2, id: 2032314, country: 'RU', sunrise: 1662161205, sunset: 1662210777 }, timezone: 25200, id: 1489425, name: 'Tomsk', cod: 200 },
    { coord: { lon: 49.1221, lat: 55.7887 }, weather: [{ id: 803, main: 'Rain', description: 'broken clouds', icon: '04d' }], base: 'stations', main: { temp: 15.81, feels_like: 14.65, temp_min: 14.23, temp_max: 15.82, pressure: 1012, humidity: 46 }, visibility: 10000, wind: { speed: 2.78, deg: 44, gust: 2.78 }, clouds: { all: 75 }, dt: 1662205955, sys: { type: 5, id: 50006421, country: 'RU', sunrise: 1662169902, sunset: 1662219281 }, timezone: 10800, id: 551487, name: 'Kazan’', cod: 200 },
    { coord: { lon: 129.8425, lat: 42.9661 }, weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }], base: 'stations', main: { temp: 15.23, feels_like: 15.34, temp_min: 15.23, temp_max: 15.23, pressure: 1018, humidity: 97, sea_level: 1018, grnd_level: 1006 }, visibility: 10000, wind: { speed: 1.7, deg: 88, gust: 1.7 }, clouds: { all: 98 }, dt: 1662205636, sys: { country: 'CN', sunrise: 1662151609, sunset: 1662198838 }, timezone: 28800, id: 2034340, name: 'Tumen', cod: 200 },
    {"coord":{"lon":30.2642,"lat":59.8944},"weather":[{"id":620,"main":"Snow","description":"light shower snow","icon":"13d"}],"base":"stations","main":{"temp":-4.97,"feels_like":-11.97,"temp_min":-4.97,"temp_max":-4.91,"pressure":988,"humidity":87},"visibility":8000,"wind":{"speed":7,"deg":110},"snow":{"1h":0.1},"clouds":{"all":100},"dt":1676799037,"sys":{"type":2,"id":197864,"country":"RU","sunrise":1676784440,"sunset":1676818718},"timezone":10800,"id":498817,"name":"Saint Petersburg","cod":200},
    { coord: { lon: 37.6156, lat: 55.7522 }, weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }], base: 'stations', main: { temp: 14.73, feels_like: 13.77, temp_min: 14.14, temp_max: 15.13, pressure: 1022, humidity: 58, sea_level: 1022, grnd_level: 1004 }, visibility: 10000, wind: { speed: 5.76, deg: 284, gust: 7.27 }, clouds: { all: 29 }, dt: 1662206033, sys: { type: 2, id: 2018597, country: 'RU', sunrise: 1662172672, sunset: 1662222034 }, timezone: 10800, id: 524901, name: 'Moscow', cod: 200 },
    { coord: { lon: 14.4208, lat: 50.088 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }], base: 'stations', main: { temp: 20.23, feels_like: 19.74, temp_min: 18.5, temp_max: 23.49, pressure: 1015, humidity: 55 }, visibility: 10000, wind: { speed: 3.09, deg: 50 }, clouds: { all: 0 }, dt: 1662205612, sys: { type: 2, id: 2010430, country: 'CZ', sunrise: 1662178802, sunset: 1662227035 }, timezone: 7200, id: 3067696, name: 'Prague', cod: 200 },
    { coord: { lon: 13.4105, lat: 52.5244 }, weather: [{ id: 800, main: 'Rain', description: 'clear sky', icon: '01d' }], base: 'stations', main: { temp: 21.71, feels_like: 21.09, temp_min: 20.01, temp_max: 22.82, pressure: 1016, humidity: 44 }, visibility: 10000, wind: { speed: 8.05, deg: 122, gust: 12.07 }, clouds: { all: 0 }, dt: 1662205923, sys: { type: 2, id: 2011538, country: 'DE', sunrise: 1662178824, sunset: 1662227497 }, timezone: 7200, id: 2950159, name: 'Berlin', cod: 200 },
    { coord: { lon: 24.9355, lat: 60.1695 }, weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }], base: 'stations', main: { temp: 11.86, feels_like: 10.69, temp_min: 10.49, temp_max: 13.35, pressure: 1014, humidity: 61 }, visibility: 10000, wind: { speed: 6.17, deg: 310 }, clouds: { all: 75 }, dt: 1662205747, sys: { type: 2, id: 2036194, country: 'FI', sunrise: 1662175151, sunset: 1662225640 }, timezone: 10800, id: 658225, name: 'Helsinki', cod: 200 },
    {"coord":{"lon":76.95,"lat":43.25},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":-0.05,"feels_like":-5.98,"temp_min":-0.05,"temp_max":-0.05,"pressure":1032,"humidity":93},"visibility":1100,"wind":{"speed":7,"deg":220},"clouds":{"all":100},"dt":1677320940,"sys":{"type":1,"id":8818,"country":"KZ","sunrise":1677288975,"sunset":1677328490},"timezone":21600,"id":1526384,"name":"Almaty","cod":200},
    {"coord":{"lon":151.2073,"lat":-33.8679},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":21.57,"feels_like":21.66,"temp_min":20.69,"temp_max":22.61,"pressure":1014,"humidity":72},"visibility":10000,"wind":{"speed":7.72,"deg":20},"clouds":{"all":0},"dt":1677321335,"sys":{"type":2,"id":2002865,"country":"AU","sunrise":1677267543,"sunset":1677314281},"timezone":39600,"id":2147714,"name":"Sydney","cod":200},
    {"coord":{"lon":-58.3772,"lat":-34.6132},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":21.7,"feels_like":21.88,"temp_min":18.82,"temp_max":23.21,"pressure":1007,"humidity":75},"visibility":10000,"wind":{"speed":1.03,"deg":0},"clouds":{"all":0},"dt":1677321181,"sys":{"type":1,"id":8224,"country":"AR","sunrise":1677317829,"sunset":1677364585},"timezone":-10800,"id":3435910,"name":"Buenos Aires","cod":200},
    {"coord":{"lon":-9.1333,"lat":38.7167},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50d"}],"base":"stations","main":{"temp":10.37,"feels_like":9.42,"temp_min":8.08,"temp_max":13.38,"pressure":1010,"humidity":75},"visibility":10000,"wind":{"speed":2.06,"deg":100},"clouds":{"all":20},"dt":1677321526,"sys":{"type":1,"id":6901,"country":"PT","sunrise":1677309319,"sunset":1677349461},"timezone":0,"id":2267057,"name":"Lisbon","cod":200},
    {"coord":{"lon":79.8478,"lat":6.9319},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"stations","main":{"temp":26.57,"feels_like":26.57,"temp_min":26.57,"temp_max":26.57,"pressure":1012,"humidity":76,"sea_level":1012,"grnd_level":1010},"visibility":10000,"wind":{"speed":5.05,"deg":335,"gust":7.91},"rain":{"1h":0.75},"clouds":{"all":100},"dt":1677330666,"sys":{"country":"LK","sunrise":1677286507,"sunset":1677329567},"timezone":19800,"id":1248991,"name":"Colombo","cod":200}


];
export const getRandomWeather = () => {
    const randomIndex = Math.ceil(Math.random() * Object.values(WEATHER_NAME).length) - 1;
    const randomKey = Object.keys(WEATHER_NAME)[randomIndex];
    const data = {};
    switch (randomKey) {
        case WEATHER_NAME.Clear: {
            data.weather = { main: WEATHER_NAME.Clear, icon: "01d" };
            data.main = { temp: Math.random() * 30 + 10 }
            break;
        }
        case WEATHER_NAME.Rain: {
            data.weather = { main: WEATHER_NAME.Rain, icon: "11d" };
            data.main = { temp: Math.random() * 15 + 5 }
            break;
        }
        case WEATHER_NAME.Clouds: {
            data.weather = { main: WEATHER_NAME.Clouds, icon: "04d" };
            data.main = { temp: Math.random() * 10 + 10 }
            break;
        }
        case WEATHER_NAME.Snow: {
            data.weather = { main: WEATHER_NAME.Snow, icon: "13d" };
            data.main = { temp: Math.random() * 5 -25 }
            break;
        }
    }
    return data;
}
const WEATHER_NAME  = {
    Clouds: 'Clouds',
    Rain: 'Rain',
    Clear: 'Clear',
    Snow: 'Snow',
}
