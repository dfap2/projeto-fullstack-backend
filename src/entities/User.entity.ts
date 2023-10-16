import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Address } from "./Address.entity";
import { Anouncement } from "./Anouncement.entity";
import { Comment } from "./Comment.entity";

export enum AccountType {
    ANUNCIANTE = "anunciante",
    COMPRADOR = "comprador",
}

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    name: string;

    @Column({ length: 120, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ length: 11, unique: true })
    cpf: string;

    @Column({ length: 11, unique: true })
    phoneNumber: string;

    @Column({ type: "date" })
    birthDate: Date;

    @Column({ type: "enum", enum: AccountType, default: AccountType.COMPRADOR })
    account: AccountType;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @DeleteDateColumn({ type: "date", nullable: true, default: null })
    deletedAt: string | null;

    @OneToOne(() => Address, (address) => address.user)
    address: Address;

    @OneToMany(() => Anouncement, (anouncements) => anouncements.user)
    anouncements: [Anouncement];

    @OneToMany(() => Comment, (comments) => comments.user)
    comments: [Comment];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hasRounds: number = getRounds(this.password);
        if (!hasRounds) {
            this.password = hashSync(this.password, 10);
        }
    }
}
