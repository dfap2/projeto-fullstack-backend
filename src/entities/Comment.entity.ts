import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Anouncement } from "./Anouncement.entity";

@Entity("comments")
export class Comment {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column({ type: "text" })
    comment: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @DeleteDateColumn({ type: "date" })
    deletedAt: string | null;

    @ManyToOne(() => Anouncement, (anouncement) => anouncement.comments)
    anouncement: Anouncement;
}
