import { IWorkout } from '../../workout/interfaces/workout.interface';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ISimpleUser } from '../interfaces/user.interface';

export class UserEntity implements ISimpleUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  workouts: IWorkout[];
}
