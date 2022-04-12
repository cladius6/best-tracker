import { IWorkout } from '../interfaces/workout.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExerciseEntity } from '../../exercise/entity/exercise.entity';

@Entity()
export class WorkoutEntity implements IWorkout {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;

  @ManyToOne(() => ExerciseEntity, (exercise) => exercise.id)
  @JoinColumn({ name: 'exercise' })
  exercises: ExerciseEntity[];
}

export interface IExercises {
  exercises: IExercises[];
}
