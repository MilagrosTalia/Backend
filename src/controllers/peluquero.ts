import {Request, Response} from 'express';

export const getPeluqueros = (req: Request, res: Response) => {
    res.json({
        msg: "getPeluquero"
    })
}