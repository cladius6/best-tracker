import { IExercise } from './exercise';

export interface IWorkout {
  id: string;
  name: string;
  description: string;
  exercises: IExercise[];
}
