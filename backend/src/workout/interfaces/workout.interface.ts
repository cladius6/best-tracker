import { IExercise } from './exercise.interface';

export interface IWorkout {
  id: string;
  name: string;
  exercises: IExercise[];
}
