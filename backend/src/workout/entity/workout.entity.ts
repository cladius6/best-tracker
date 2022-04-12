import { IWorkout } from '../interfaces/workout.interface';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExerciseEntity } from '../../exercise/entity/exercise.entity';

@Entity()
export class WorkoutEntity implements IWorkout {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;

  @ManyToMany(() => ExerciseEntity)
  @JoinTable()
  exercises: ExerciseEntity;
}

export interface IExercises {
  exercises: IExercises[];
}
