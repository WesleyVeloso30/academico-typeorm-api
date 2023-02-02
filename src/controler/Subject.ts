import { Request, Response } from "express";

export class Subject {
    async create(req: Request, res: Response) {
        const { name } = req.body;

        if (!name){
            return res.status(400).json({ msg: 'Algum campo inválido.'});
        }

        try {
            
        } catch (error) {
            console.error(error)
            return res.status(500).json('Internal Server Error.')
        }
    }
}