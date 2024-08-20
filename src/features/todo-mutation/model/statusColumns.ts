import { StatusColumn, StatusEnum } from "./types";

export const statusColumns: StatusColumn[] = [
  {
    status: StatusEnum.TODO,
    title: "TO DO",
  },
  {
    status: StatusEnum.IN_PROGRESS,
    title: "IN PROGRESS",
  },
  {
    status: StatusEnum.DONE,
    title: "DONE",
  },
];
