import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IExercise } from '../interfaces/exercise.interface';

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
  video: string;

  @Column()
  category: string;

  @Column()
  equipment: string[];

  @Column()
  muscles: string[];

  @Column()
  musclesSecondary: string[];

  @Column()
  level: string;

  @Column()
  type: string;
}
