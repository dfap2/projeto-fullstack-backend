import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Anouncement } from "./Anouncement.entity";

@Entity("images")
export class Image {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column({ length: 255 })
    imageUrl: string;

    @ManyToOne(() => Anouncement, (anouncement) => anouncement.images)
    anouncement: Anouncement;
}
