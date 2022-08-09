export interface Story {
  id: number;
  title: string;
  url: string;
  by: string;
  time: number;
  score: number;
  decendants: number;
  type: string;
  kids: number[];
}
