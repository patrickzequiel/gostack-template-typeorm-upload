import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreationTransactions1609982234570 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'transactions',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'title',
              type: 'varchar'
            },
            {
              name: 'type',
              type: 'varchar',
            },
            {
              name: 'value',
              type: 'decimal',
              precision: 10, //significa que o valor pode ter dez dígitos
              scale: 2, //dois dígitos do lado direito 1000.22
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'update_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      //faz o trabalho contrário da criação da tabela
      await queryRunner.dropTable('transactions')
    }

}
