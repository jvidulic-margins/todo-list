import { todosUrl } from "shared/api/baseApi";
import { baseApi } from "shared/api";
import { Todo } from "../model/types";

export const todoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addTodo: build.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: `${todosUrl}/add`,
        method: "POST",
        body,
      }),
    }),
    updateTodo: build.mutation<Todo, { id: number; data: Partial<Todo> }>({
      query: ({ id, data }) => ({
        url: `${todosUrl}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteTodo: build.mutation<void, number>({
      query: (id) => ({
        url: `${todosUrl}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
