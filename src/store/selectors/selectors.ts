import {RootState} from "../store.ts";

export const getAllTodos = (state: RootState) => state.todos

export const getCompletedTodos = (state: RootState) => state.todos.filter(todo => todo.isCompleted)

export const getActiveTodos = (state: RootState) => state.todos.filter(todo => !todo.isCompleted)