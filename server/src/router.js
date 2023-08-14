import express from 'express';
import {cities} from "./constants.js";

export const cityRouter = express.Router();

cityRouter.post('/', (req, res) => {
    const delay = 1000;
    setTimeout(() => {
        const citiesIds = req.body.cityIds;
        const data = citiesIds.map((cityId) => {
            return cities.find((city) => city.id === +cityId);
        });
        res.send(data);
    }, delay);
});
