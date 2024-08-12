declare global {
  // App types
  export type ApiResponse<T> = {
    status: "success" | "fail";
    message?: string;
    data?: { data: T };
  };

  // Custom utility types
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;

  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type Indexed<K = string, T = unknown> = { [key: K]: T };

  export type Brand<K, T> = K & { [_brand]: T };

  // FSD: This is a way of inferring types from /app and using them in /shared/lib/utils/typedRedux.ts
  declare type RootState = import("../src/app/store").RootState;
  declare type AppDispatch = import("../src/app/store").AppDispatch;
}

export {};
