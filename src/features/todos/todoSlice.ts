import { createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../../shared/types";

const initialState: Todo[] = [
	{
		status: "done",
		title: "Test One",
	},
	{
		status: "todo",
		title: "Test Two",
	},
	{
		status: "inProgress",
		title: "Test Three",
	},
	{
		status: "todo",
		title: "Test Four",
	},
	{
		status: "inProgress",
		title: "Test Four.Five",
	},
	{
		status: "todo",
		title: "Test Five",
	},
];
export const todoSlice = createSlice({
	initialState,
	name: "Todo",
	reducers: {},
});

export default todoSlice.reducer;
