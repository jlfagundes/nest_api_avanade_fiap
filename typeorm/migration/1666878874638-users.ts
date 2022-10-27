import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn } from '../../typeorm/utils/idColumn';
import { varcharColumn } from '../utils/varcharColumn';

export class users1666878874638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          idColumn('id'),
          varcharColumn('nome', '100', false),
          varcharColumn('email', '255', false),
          varcharColumn('password', '64', false),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
