import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1696602037689 implements MigrationInterface {
    name = 'InitialMigration1696602037689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "imageUrl" character varying(255) NOT NULL, "anouncementUuid" uuid, CONSTRAINT "PK_a5bd7999989d2a6bb88924613ba" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "anouncementUuid" uuid, CONSTRAINT "PK_160936d39977f78f7789e0fb787" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "public"."anouncements_fuel_enum" AS ENUM('gasolina', 'etanol')`);
        await queryRunner.query(`CREATE TABLE "anouncements" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(50) NOT NULL, "model" character varying(50) NOT NULL, "year" date NOT NULL, "fuel" "public"."anouncements_fuel_enum" NOT NULL DEFAULT 'gasolina', "description" text NOT NULL, "price" numeric(10,2) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "userUuid" uuid, CONSTRAINT "PK_a73f38fab7a43fae91eed8bc8c6" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_account_enum" AS ENUM('anunciante', 'comprador')`);
        await queryRunner.query(`CREATE TABLE "users" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(255) NOT NULL, "cpf" character varying(11) NOT NULL, "phoneNumber" integer NOT NULL, "birthDate" date NOT NULL, "account" "public"."users_account_enum" NOT NULL DEFAULT 'comprador', "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "zipCode" integer NOT NULL, "states" character varying(25) NOT NULL, "city" character varying(40) NOT NULL, "street" character varying(120) NOT NULL, "number" integer, "complement" character(50), "userUuid" uuid, CONSTRAINT "REL_2744b66a527407b3459437accb" UNIQUE ("userUuid"), CONSTRAINT "PK_9239128a6170bb533f2eb75b050" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_b3eea14e2cc4894407bc206dd78" FOREIGN KEY ("anouncementUuid") REFERENCES "anouncements"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_09034b5907556b65277954d9980" FOREIGN KEY ("anouncementUuid") REFERENCES "anouncements"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "anouncements" ADD CONSTRAINT "FK_0ff3b95ac8d28a16946880e9d85" FOREIGN KEY ("userUuid") REFERENCES "users"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_2744b66a527407b3459437accb8" FOREIGN KEY ("userUuid") REFERENCES "users"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_2744b66a527407b3459437accb8"`);
        await queryRunner.query(`ALTER TABLE "anouncements" DROP CONSTRAINT "FK_0ff3b95ac8d28a16946880e9d85"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_09034b5907556b65277954d9980"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_b3eea14e2cc4894407bc206dd78"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_account_enum"`);
        await queryRunner.query(`DROP TABLE "anouncements"`);
        await queryRunner.query(`DROP TYPE "public"."anouncements_fuel_enum"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
