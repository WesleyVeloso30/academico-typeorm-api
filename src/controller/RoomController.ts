import { Request, Response } from "express";
import { RoomRepository } from "../repositories/RoomRepository";
import { VideoRepository } from "../repositories/VideoRepository";

export class RoomController {
    async create(req: Request, res: Response) {
        const { name, description } = req.body;

        if(!name) throw new Error ('Preencha os campos obrigatorios.');

        try {
            const newRoom = RoomRepository.create({ name, description });

            await RoomRepository.save(newRoom);

            return res.status(201).json(newRoom);
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async createVideo(req: Request, res: Response) {
        const { title, url } = req.body;
        const { idRoom } = req.params;

        if(!title || !url || !idRoom) throw new Error ('Preencha os campos obrigatorios.');

        try {
            const room = RoomRepository.findOneBy({ id: Number(idRoom) });

            if (!room) return res.status(404).json({message: 'Aula não existe.'})

            // const newVideo = VideoRepository.create({ title, url,  });

            // await VideoRepository.save(newVideo);

            // return res.status(201).json(newVideo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}