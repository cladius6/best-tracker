import { IWorkout } from '../interfaces/workout.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExerciseEntity } from '../../exercise/entity/exercise.entity';

@Entity()
export class WorkoutEntity implements IWorkout {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;

  @ManyToOne(() => ExerciseEntity)
  exercises: ExerciseEntity[];
}

export interface IExercises {
  exercises: ExerciseEntity[];
}
