export interface IExercise {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  muscles: string[];
  musclesSecondary: string[];
  equipment: string[];
  level: string;
  video: string;
  type: string;
}
