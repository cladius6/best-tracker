import axios from "axios";
import {
  IAddNewWorkout,
  IAddNewWorkoutRequest,
  IAddNewWorkoutResponse,
} from "../types/addNewWorkout";

export class AddNewWorkout implements IAddNewWorkout {
  async add(request: IAddNewWorkoutRequest): Promise<IAddNewWorkoutResponse> {
    try {
      const resp = await axios.post(`http://localhost:3000/workout`, request);
      return resp.data as IAddNewWorkoutResponse;
    } catch (e) {
      throw e;
    }
  }
}
