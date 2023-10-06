import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("addresses")
export class Address {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column({ type: "integer" })
    zipCode: number;

    @Column({ length: 25 })
    states: string;

    @Column({ length: 40 })
    city: string;

    @Column({ length: 120 })
    street: string;

    @Column({ type: "integer", nullable: true })
    number?: number | null;

    @Column({ type: "char", length: 50, nullable: true })
    complement?: string | null;

    @OneToOne(() => User, (user) => user.address)
    @JoinColumn()
    user: User;
}
