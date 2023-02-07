import { Request, Response } from "express";
import { Subject } from "../entities/Subject";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {
    async create(req: Request, res: Response) {
        const { name } = req.body;

        if (!name){
            return res.status(400).json({ msg: 'Algum campo inválido.'});
        }

        try {
            const newSubject: Subject = SubjectRepository.create({ name });

            await SubjectRepository.save(newSubject);

            return res.status(201).json(newSubject);
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error.');
        }
    }
}