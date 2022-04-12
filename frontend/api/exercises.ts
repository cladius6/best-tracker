// import { IGetExercises } from "../types/exercises";
import {IExercise} from "../../backend/src/exercise/interfaces/exercise.interface"
import axios from "axios";


export async function getExercises() {
    const resp = await axios.get(`http://localhost:3000/exercise`);
    return resp.data as IExercise;
}