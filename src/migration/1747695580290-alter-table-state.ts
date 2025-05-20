import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableState1747695580290 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE vendas.state 
                ADD uf VARCHAR(2) NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE vendas.state 
                DROP uf
            `);
  }
}
