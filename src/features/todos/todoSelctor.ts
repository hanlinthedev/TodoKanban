import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { Todo, TodoStatus } from "../../shared/types";

const selectTodos = (state: RootState) => state.todos;

export const selectTodoByStatus = (status: TodoStatus) =>
	createSelector([selectTodos], (todos: Todo[]) => {
		return todos.filter((todo) => todo.status === status);
	});
