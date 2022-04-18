import { Muscle } from '../enum/muscle.enum';

export interface IExercise {
  id: string;
  name: string;
  description: string;
  category: string;
  muscle: Muscle;
  muscleSecondary: Muscle;
  level: string;
  image: string;
  type: string;
}

export interface ICreateExercise {
  name: string;
  description: string;
  category: string;
  image: string;
  muscle: Muscle;
  muscleSecondary: Muscle;
  level: string;
  type: string;
}
