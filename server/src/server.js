import express from 'express';
import { ROUTES } from './constants.js';
import { cityRouter } from './cityRouter.js';
import path from 'path';
import bodyParser  from 'body-parser';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import cors from "cors";
import {logger} from "./logger.js";

const app = express();

const corsOptions = {
    "origin": "*",
}
app.use(cors(corsOptions));

app.use(logger);
app.use(bodyParser.json());
app.use(ROUTES.city, cityRouter);
console.log(path.join(__dirname, '../static/build'));
app.use('/', express.static(path.join(__dirname, '../static/build')))

app.listen(8090, function () {
    console.log('Example app listening on port 8090!\n');
});