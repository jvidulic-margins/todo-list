export type ProgressBar = "todo" | "in-progress" | "done";
export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  date: string;
  status: ProgressBar;
};

export type ProgressBarColumn = {
  id: ProgressBar;
  title: string;
};
