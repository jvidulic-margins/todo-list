import { baseApi } from "shared/api";
import { type User } from "../model/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<ApiResponse<User>, void>({
      query: () => ({
        url: "/users/me",
      }),
    }),
  }),
});

export const { useMeQuery, useGetAllUsersQuery } = userApi;
