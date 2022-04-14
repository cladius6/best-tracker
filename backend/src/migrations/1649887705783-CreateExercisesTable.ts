import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateExercisesTable1649887705783 implements MigrationInterface {
  table = new Table({
    name: 'exercises',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'text',
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'image',
        type: 'text',
      },
      {
        name: 'category',
        type: 'text',
      },
      {
        name: 'muscle',
        type: 'text',
      },
      {
        name: 'muscleSecondary',
        type: 'text',
      },
      {
        name: 'level',
        type: 'text',
      },
      {
        name: 'type',
        type: 'text',
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
