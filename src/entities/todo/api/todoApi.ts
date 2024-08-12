import { baseApi, todosUrl } from "shared/api";
import { Todo } from "features/todo-mutation/model/types";

export const todoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchTodos: build.query<
      { todos: Todo[]; total: number; skip: number; limit: number },
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => ({
        url: `${todosUrl}?limit=${limit}&skip=${skip}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchTodosQuery } = todoApi;
