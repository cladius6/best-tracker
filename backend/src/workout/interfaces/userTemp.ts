import { IWorkout } from './workout';

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
