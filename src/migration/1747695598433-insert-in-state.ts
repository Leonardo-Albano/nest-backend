import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInState1747695598433 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO vendas.state(id, name, uf) VALUES 
                (1, 'Acre', 'AC'),
                (2, 'Alagoas', 'AL'),
                (3, 'Amapá', 'AP'),
                (4, 'Amazonas', 'AM'),
                (5, 'Bahia', 'BA'),
                (6, 'Ceará', 'CE'),
                (7, 'Distrito Federal', 'DF'),
                (8, 'Espírito Santo', 'ES'),
                (9, 'Goiás', 'GO'),
                (10, 'Maranhão', 'MA'),
                (11, 'Mato Grosso', 'MT'),
                (12, 'Mato Grosso do Sul', 'MS'),
                (13, 'Minas Gerais', 'MG'),
                (14, 'Pará', 'PA'),
                (15, 'Paraíba', 'PB'),
                (16, 'Paraná', 'PR'),
                (17, 'Pernambuco', 'PE'),
                (18, 'Piauí', 'PI'),
                (19, 'Rio de Janeiro', 'RJ'),
                (20, 'Rio Grande do Norte', 'RN'),
                (21, 'Rio Grande do Sul', 'RS'),
                (22, 'Rondônia', 'RO'),
                (23, 'Roraima', 'RR'),
                (24, 'Santa Catarina', 'SC'),
                (25, 'São Paulo', 'SP'),
                (26, 'Sergipe', 'SE'),
                (27, 'Tocantins', 'TO');
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM vendas.state;
    `);
  }
}
