import express from 'express';
import {cities, getRandomWeather} from "./constants.js";

export const cityRouter = express.Router();

cityRouter.post('/', (req, res) => {
    const delay = 1000;
    setTimeout(() => {
        const citiesIds = req.body.cities;
        const data = citiesIds.map((cityId) => {
            const city =  cities.find((city) => city.id === +cityId);
            const randomData = getRandomWeather();
            city.main.temp = randomData.main.temp;
            city.weather[0].main =   randomData.weather.main;
            city.weather[0].icon = randomData.weather.icon;

            return city;
        })
        const response = {
            cities: data,
            requestTime: new Date().getTime()
        }
        res.send(response);
    }, delay);
});
