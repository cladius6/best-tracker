import { IWorkout } from '../../workout/interfaces/workout.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ISimpleUser } from '../interfaces/user.interface';
import { WorkoutEntity } from '../../workout/entity/workout.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
}
