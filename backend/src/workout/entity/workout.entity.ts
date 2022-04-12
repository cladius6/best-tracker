import { IWorkout } from '../interfaces/workout.interface';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExerciseEntity } from '../../exercise/entity/exercise.entity';
import { UserEntity } from '../../user/entity/user.entity';

@Entity()
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
