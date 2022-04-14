import { IWorkout } from '../interfaces/workout.interface';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExerciseEntity } from '../../exercises/entity/exercise.entity';
import { UserEntity } from '../../users/entity/user.entity';

@Entity('workouts')
export class WorkoutEntity implements IWorkout {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => ExerciseEntity, {
    cascade: true,
  })
  @JoinTable()
  exercises: ExerciseEntity[];

  @ManyToOne(() => UserEntity, (user) => user.id)
  user?: UserEntity;
}
