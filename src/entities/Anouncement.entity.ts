import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Image } from "./Image.entity";
import { User } from "./User.entity";
import { Comment } from "./Comment.entity";

export enum FuelType {
    GASOLINA = "gasolina",
    ETANOL = "etanol",
}

@Entity("anouncements")
export class Anouncement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    brand: string;

    @Column({ length: 50 })
    model: string;

    @Column({ type: "date" })
    year: Date;

    @Column({ type: "enum", enum: FuelType, default: FuelType.GASOLINA })
    fuel: FuelType;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;

    @CreateDateColumn({ type: "date" })
    createdAt: string | Date;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string | Date;

    @DeleteDateColumn({ type: "date" })
    deletedAt: string | Date | null;

    @OneToMany(() => Image, (images) => images.anouncement)
    images: [Image];

    @OneToMany(() => Comment, (comments) => comments.anouncement)
    comments: [Comment];

    @ManyToOne(() => User, (user) => user.anouncements)
    user: User;
}
