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
import { User } from "./User.entity";

@Entity("comments")
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

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

    @ManyToOne(() => User, (user) => user.comments)
    user: User;
}
