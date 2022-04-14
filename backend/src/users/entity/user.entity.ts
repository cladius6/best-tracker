import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WorkoutEntity } from '../../workouts/entity/workout.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;

  @OneToMany(() => WorkoutEntity, (workout) => workout.user)
  workouts: WorkoutEntity[];
}