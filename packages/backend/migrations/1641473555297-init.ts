import {MigrationInterface, QueryRunner} from "typeorm";

export class init1641473555297 implements MigrationInterface {
    name = 'init1641473555297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "image" SET NOT NULL`);
    }

}
