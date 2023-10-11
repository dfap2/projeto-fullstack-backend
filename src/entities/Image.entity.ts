import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Anouncement } from "./Anouncement.entity";

@Entity("images")
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    imageUrl: string;

    @ManyToOne(() => Anouncement, (anouncement) => anouncement.images)
    anouncement: Anouncement;
}
