import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAdress1747351216240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE address (
            id INT NOT NULL AUTO_INCREMENT,
            user_id INT DEFAULT NULL,
            complement VARCHAR(255) NOT NULL,
            number INT DEFAULT NULL,
            cep VARCHAR(255) NOT NULL,
            city_id INT DEFAULT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            FOREIGN KEY (user_id) REFERENCES user(id),
            FOREIGN KEY (city_id) REFERENCES city(id)
        );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                drop table vendas.address;

            `);
  }
}
