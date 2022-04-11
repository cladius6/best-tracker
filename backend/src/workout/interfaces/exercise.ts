export interface IExercise {
  id: number;
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
