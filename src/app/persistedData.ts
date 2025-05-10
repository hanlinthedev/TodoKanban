import type { Todo } from "../shared/types";

export const getPersistedData = (): Todo[] => {
	const persistedData = localStorage.getItem("todos");
	if (persistedData) {
		return JSON.parse(persistedData);
	}
	return [];
};
