import { Muscle } from '../enum/muscle.enum';

export interface IExercise {
  id: string;
  name: string;
  description: string;
  category: string;
  muscle: Muscle;
  muscleSecondary: Muscle;
  level: string;
  type: string;
}

export interface IAddExercise {
  name: string;
  description: string;
  category: string;
  muscle: Muscle;
  muscleSecondary: Muscle;
  level: string;
  type: string;
}
