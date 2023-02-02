import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity('video')
export class Video {
    @PrimaryGeneratedColumn({ type: "int4"})
    public id?: number

    @Column({ type: 'text' })
    public title?: string

    @Column({ type: 'text' })
    public url?: string

    @ManyToOne(() => Room, room => room.videos)
    @JoinColumn({name: 'room_id'})
    public room?: Room
}