import type { Store, UnknownAction } from "@reduxjs/toolkit";

export const persistMiddleware =
	(store: Store) =>
	(next: (action: UnknownAction) => void) =>
	(action: UnknownAction) => {
		next(action);
		const { todos } = store.getState();
		localStorage.setItem("todos", JSON.stringify(todos));
	};
