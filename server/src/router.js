import express from 'express';
import {cities} from "./constants.js";

export const cityRouter = express.Router();

cityRouter.get('/', (req, res) => {
    const delay = 2000;
    setTimeout(() => {
        res.send(cities);
    }, delay);
});
