import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddUserRelationToWorkouts1649945282948
  implements MigrationInterface
{
  column = new TableColumn({
    name: 'user_id',
    type: 'int',
    isNullable: false,
  });

  private readonly userForeignKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'workouts',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('workouts', this.column);
    await queryRunner.createForeignKey('workouts', this.userForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('workouts', this.column);
    await queryRunner.dropForeignKey('workouts', this.userForeignKey);
  }
}
