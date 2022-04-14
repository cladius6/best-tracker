import { IWorkout } from '../interfaces/workout.interface';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
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
  @JoinTable({
    name: 'exercises_workouts',
    joinColumn: { name: 'workout_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'exercise_id', referencedColumnName: 'id' },
  })
  exercises: ExerciseEntity[];

  @ManyToOne(() => UserEntity, (user) => user.workouts)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
