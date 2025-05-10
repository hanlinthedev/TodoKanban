import { useState } from "react";
import { useSelector } from "react-redux";
import type { TodoStatus } from "../../../shared/types";
import { TodoCard } from "../../todos/components";
import { selectTodoByStatus } from "../../todos/todoSelctor";
import FilterBtn from "./FilterBtn";

type Props = {
	status: TodoStatus;
};

export type FilterBy = "none" | "dueDateAsc" | "dueDateDesc";

const KanBanColumn = ({ status }: Props) => {
	const [filterBy, setFilterBy] = useState<FilterBy>("none");
	const TodoStatusLabel: Record<TodoStatus, string> = {
		todo: "To do",
		inProgress: "In Progress",
		done: "Done",
	};

	const todos = useSelector(selectTodoByStatus(status));

	const getFilteredTodos = () => {
		switch (filterBy) {
			case "dueDateAsc":
				return todos.sort((a, b) => {
					return new Date(a.dueDate) > new Date(b.dueDate) ? 1 : -1;
				});
			case "dueDateDesc":
				return todos.sort((a, b) => {
					return new Date(a.dueDate) < new Date(b.dueDate) ? 1 : -1;
				});
			default:
				return todos;
		}
	};

	return (
		<div className={`w-full`}>
			<div
				className={`w-full p-4 shadow  flex justify-between items-center rounded-xl  bg-blue-400 `}
			>
				<h1 className="text-lg text-gray-600">{TodoStatusLabel[status]}</h1>
				{status !== "done" && <FilterBtn onClick={setFilterBy} />}
			</div>
			<div className="space-y-2 py-2 max-h-[28vh] sm:max-h-[50vh] lg:max-h-[90vh] overflow-auto">
				{getFilteredTodos().map((todo) => (
					<TodoCard key={todo.title} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default KanBanColumn;
