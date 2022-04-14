import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateWorkouts1649943877828 implements MigrationInterface {
  table = new Table({
    name: 'workouts',
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
    ],
  });

  relationTable = new Table({
    name: 'exercises_workouts',
    columns: [
      {
        name: 'exercise_id',
        type: 'int',
        isPrimary: true,
      },
      {
        name: 'workout_id',
        type: 'int',
        isPrimary: true,
      },
    ],
  });

  private readonly workoutsForeignKey = new TableForeignKey({
    columnNames: ['workout_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'workouts',
  });

  private readonly exercisesForeignKey = new TableForeignKey({
    columnNames: ['exercise_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'exercises',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
    await queryRunner.createTable(this.relationTable, true);
    await queryRunner.createForeignKey(
      this.relationTable,
      this.exercisesForeignKey,
    );
    await queryRunner.createForeignKey(
      this.relationTable,
      this.workoutsForeignKey,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table, true);
    await queryRunner.dropTable(this.relationTable, true);
    await queryRunner.dropForeignKey('workouts', this.workoutsForeignKey);
    await queryRunner.dropForeignKey('exercises', this.exercisesForeignKey);
  }
}
