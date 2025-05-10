import { createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../../shared/types";

const initialState: Todo[] = [
	{
		id: Date.now().toString(),
		status: "done",
		title: "Test One",
		dueDate: Date.UTC(2025, 10, 13),
	},
	{
		id: Date.now().toString(),

		status: "todo",
		title: "Test Two",
		dueDate: Date.UTC(2025, 10, 14),
	},
	{
		id: Date.now().toString(),
		status: "inProgress",
		title: "Test Three",
		dueDate: Date.UTC(2025, 10, 1),
	},
	{
		id: Date.now().toString(),
		status: "todo",
		title: "Test Four",
		dueDate: Date.UTC(2025, 10, 13),
	},
	{
		id: Date.now().toString(),
		status: "inProgress",
		title: "Test Four.Five",
		dueDate: Date.UTC(2025, 1, 8),
	},
	{
		id: Date.now().toString(),
		status: "todo",
		title: "Test Five",
		dueDate: Date.UTC(2025, 9, 13),
	},
];
export const todoSlice = createSlice({
	initialState,
	name: "Todo",
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
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
			const { id, title, description, status } = action.payload;
			const todo = state.find((todo) => todo.id === id);
			if (todo) {
				todo.title = title;
				todo.status = status;
				todo.description = description;
			}
		},
	},
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodoStatus, editTodo } =
	todoSlice.actions;
