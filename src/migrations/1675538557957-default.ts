import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675538557957 implements MigrationInterface {
    name = 'default1675538557957'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "name" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "name" character varying NOT NULL`);
    }

}
