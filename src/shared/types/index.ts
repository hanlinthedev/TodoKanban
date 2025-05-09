export type TodoStatus = "todo" | "inProgress" | "done";

export interface Todo {
	status: TodoStatus;
	title: string;
	description?: string;
}
