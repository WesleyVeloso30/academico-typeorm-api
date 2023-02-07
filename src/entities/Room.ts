import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subject } from "./Subject";
import { Video } from "./Video";

@Entity('room')
export class Room {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({ type: 'text' })
    public name?: string;
    
    @Column({ type: 'text', nullable: true })
    public description?: string;
    
    @OneToMany(() => Video, video => video.room)
    public videos?: Video[];

    @ManyToMany(() => Subject, subject => subject.rooms )
    subjects?: Subject[];

}