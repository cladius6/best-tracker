import { IExerciseWithRepeats } from "./exercises";

export interface IAddNewWorkoutRequest {
  exercises: IExerciseWithRepeats[];
}

export interface IAddNewWorkoutResponse {
  responseMessage: string;
}

export interface IAddNewWorkout {
  add(request: IAddNewWorkoutRequest): Promise<IAddNewWorkoutResponse>;
}
