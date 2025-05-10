import { createSlice } from "@reduxjs/toolkit";
import { getPersistedData } from "../../app/persistedData";
import type { Todo } from "../../shared/types";

const initialState: Todo[] = getPersistedData();
export const todoSlice = createSlice({
	initialState,
	name: "Todo",
	reducers: {
		addTodo: (state, action) => {
			state.unshift(action.payload);
		},
		removeTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
		updateTodoStatus: (state, action) => {
			const { id, status } = action.payload;
			const todo = state.find((todo) => todo.id === id);
			if (todo) {
				todo.status = status;
			}
		},
		editTodo: (state, action) => {
			const { id, title, description, status, dueDate } = action.payload;
			const todo = state.find((todo) => todo.id === id);
			if (todo) {
				todo.title = title;
				todo.status = status;
				todo.description = description;
				todo.dueDate = dueDate;
			}
		},
	},
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodoStatus, editTodo } =
	todoSlice.actions;
