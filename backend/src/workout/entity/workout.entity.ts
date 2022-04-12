import { IWorkout } from '../interfaces/workout.interface';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ExerciseEntity } from '../../exercise/entity/exercise.entity';

export class WorkoutEntity implements IWorkout {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({
    default: {},
  })
  exercises: IExercises;
}

export interface IExercises {
  exercises: ExerciseEntity[];
}
