import express from 'express';
import { ROUTES } from './constants.js';
import { cityRouter } from './router.js';

import cors from "cors";
import {logger} from "./logger.js";
const app = express();

const corsOptions = {
    "origin": "*",
}
app.use(cors(corsOptions));

app.use(logger);

app.use(ROUTES.city, cityRouter);


app.listen(8090, function () {
    console.log('Example app listening on port 8090!\n');
});
