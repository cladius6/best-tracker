import { IWorkout } from '../interfaces/workout.interface';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class UserEntity implements ISimpleUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  workouts: IWorkout[];
}
export interface ISimpleUser {
  username: string;
  workouts: IWorkout[];
}
