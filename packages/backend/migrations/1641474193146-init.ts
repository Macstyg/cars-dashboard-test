import {MigrationInterface, QueryRunner} from "typeorm";

export class init1641474193146 implements MigrationInterface {
    name = 'init1641474193146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "deleted_date" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "deleted_date"`);
    }

}
