import { IExercise } from "../../backend/src/exercise/interfaces/exercise.interface";

export interface IResponseMessage {
  responseMessage: string;
}

export interface IExercisesResponse {
  exercises: IExercise[];
}

export interface IGetExercises {
  get(): Promise<IExercisesResponse>;
}

export interface IAddExercises {
  add(request: IExercise): Promise<IResponseMessage>;
}
