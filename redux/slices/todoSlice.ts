import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "@/interfaces";

const todoSlice = createSlice({
  name: "todo",
  
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    addTodo: (state, action: { payload: Todo }) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: { payload: Todo }) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = { ...state.todos[index], ...action.payload };
    },
    deleteTodo: (state, action: { payload: string }) => {
      state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: { payload: string }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const [completedTodo] = state.todos.splice(index, 1);
      completedTodo.completed = true;
      state.todos.push(completedTodo);
    },
  },
});

export const { addTodo, completeTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
