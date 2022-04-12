import { IExercise } from '../../exercise/interfaces/exercise.interface';

export interface IWorkout {
  id: string;
  name: string;
  exercises: IExercise[];
}
