import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";
import { generateWeekdays } from "../lib/utils/dateUtils";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload.map((payload) => ({
        ...payload,
        date: generateWeekdays()[0],
      }));
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, setTodos } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
