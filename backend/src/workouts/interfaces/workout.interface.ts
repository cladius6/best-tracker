export interface IWorkout {
  id: string;
  name: string;
}

export interface ICreateWorkout {
  name: string;
  exerciseId?: string;
}

export interface IWorkoutExerciseCo {
  workoutId: string;
  exerciseId: string;
}

export interface IUpdateWorkout {
  id: string;
  newName: string;
}
