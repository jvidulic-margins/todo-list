import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "shared/lib";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
  // 👇 createApi function requires endpoints function, but we will define them in separate files
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});

export const todosUrl = "https://dummyjson.com/todos";
