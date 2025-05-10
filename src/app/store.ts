import { configureStore, Tuple } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
import { persistMiddleware } from "./persistMiddleware";
export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
	middleware: (getDefaulMiddleware) =>
		getDefaulMiddleware().concat(persistMiddleware as unknown as Tuple),
});

// export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
