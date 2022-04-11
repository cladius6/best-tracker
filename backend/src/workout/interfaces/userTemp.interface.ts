import { IWorkout } from './workout.interface';

export interface IUserTemp {
  username: string;
  IWorkout: IWorkout[];
  Score: {
    scoreStrength: number;
    scoreSpeed: number;
    scoreEndurance: number;
    scoreTotal: number;
  };
}