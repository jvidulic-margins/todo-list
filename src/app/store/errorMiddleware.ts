import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const errorMiddleware: Middleware =
  (_: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      // Display toast message...
    }

    return next(action);
  };
