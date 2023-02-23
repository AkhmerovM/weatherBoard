import express from 'express';
import {cities} from "./constants.js";

export const cityRouter = express.Router();

cityRouter.post('/', (req, res) => {
    const delay = 1000;
    setTimeout(() => {
        const citiesIds = req.body.cities;
        const data = citiesIds.map((cityId) => {
            const city =  cities.find((city) => city.id === +cityId);
            city.main.temp = Math.random() * 60 - 30;
            return city;
        })
        const response = {
            cities: data,
            requestTime: new Date().getTime()
        }
        res.send(response);
    }, delay);
});
