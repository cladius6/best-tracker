import { IWorkout } from './workout';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  workouts?: IWorkout[];
  score: {
    total: IScore;
    lastWeek: IScore;
    lastMonth: IScore;
    lastYear: IScore;
  };
}

export interface IScore {
  scoreStrength: number;
  scoreEndurance: number;
  scoreTotal: number;
}
