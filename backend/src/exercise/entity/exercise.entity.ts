import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IExercise } from '../interfaces/exercise.interface';
import { Muscle } from '../enum/muscle.enum';

@Entity()
export class ExerciseEntity implements IExercise {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column({
    type: 'enum',
    enum: Muscle,
    default: Muscle.Other,
  })
  muscle: Muscle;

  @Column()
  muscleSecondary: Muscle;

  @Column()
  level: string;

  @Column()
  type: string;
}
