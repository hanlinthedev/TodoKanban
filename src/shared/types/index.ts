export type TodoStatus = "todo" | "inProgress" | "done";

export interface Todo {
	id: string;
	status: TodoStatus;
	title: string;
	description?: string;
	dueDate: number;
}
