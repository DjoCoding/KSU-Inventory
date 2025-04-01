import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProfilePictureToUsersTable1743503851290 implements MigrationInterface {
    name = 'AddProfilePictureToUsersTable1743503851290'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "profile_pic" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_pic"`);
    }
}
