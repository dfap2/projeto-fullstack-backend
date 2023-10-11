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
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 8 })
    zipCode: string;

    @Column({ length: 25 })
    state: string;

    @Column({ length: 40 })
    city: string;

    @Column({ length: 120 })
    street: string;

    @Column({ type: "integer", nullable: true, default: 0 })
    number?: number | undefined | null;

    @Column({ type: "char", length: 50, nullable: true, default: null })
    complement?: string | undefined | null;

    @OneToOne(() => User, (user) => user.address)
    @JoinColumn()
    user: User;
}
