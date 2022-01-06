import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1641471492502 implements MigrationInterface {
  name = 'init1641471492502';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "vendor" character varying(100) NOT NULL, "model" character varying(100) NOT NULL, "year" integer NOT NULL, "plate" character varying(50) NOT NULL, "image" character varying(255) NOT NULL, "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_a309ce7ba400919557999e69be1" UNIQUE ("plate"), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cars"`);
  }
}
