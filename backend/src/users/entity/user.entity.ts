import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WorkoutEntity } from '../../workouts/entity/workout.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;

  @OneToMany(() => WorkoutEntity, (workout) => workout.user)
  workouts: WorkoutEntity[];
}
