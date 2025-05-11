import type { Todo, TodoStatus } from "./types";

export const changeToLocaleDateString = (date: number) => {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

export const addIdAndStatus = (todo: Omit<Todo, "id" | "status">) => {
	return {
		...todo,
		id: Date.now().toString(),
		status: "todo" as TodoStatus,
	};
};

export const handleStopPropagation =
	(e: React.MouseEvent<HTMLDivElement>) => (fn: () => void) => {
		e.stopPropagation();
		fn();
	};
