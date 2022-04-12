import {IExercise} from "../../backend/src/exercise/interfaces/exercise.interface"

export interface IResponseMessage{
  responseMessage : string;
}

// export interface IGetExercises {
//   get(): Promise<IExercise>;
// }

export interface IAddExercises {
  add(request: IExercise) : Promise<IResponseMessage>
}
    