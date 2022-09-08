import { cities } from '@/server/constants';
import express, { Request, Response } from 'express';

export const cityRouter = express.Router();

cityRouter.get('/', (req: Request, res: Response) => {
    res.send(cities);
});
