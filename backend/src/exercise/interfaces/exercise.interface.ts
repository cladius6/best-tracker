import { Muscle } from '../entity/exercise.entity';

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
