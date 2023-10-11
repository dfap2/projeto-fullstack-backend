import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1697031357207 implements MigrationInterface {
    name = 'NewMigration1697031357207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anouncements" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "anouncements" ADD "year" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anouncements" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "anouncements" ADD "year" date NOT NULL`);
    }

}
