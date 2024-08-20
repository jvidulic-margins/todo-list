// export type ProgressBar = "todo" | "in-progress" | "done";
export enum StatusEnum {
  TODO = "todo",
  IN_PROGRESS = "in-progress",
  DONE = "done",
}
export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  date: string;
  status: StatusEnum;
};

export type StatusColumn = {
  status: StatusEnum;
  title: string;
};
