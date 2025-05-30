import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { TodoStatus } from "../../../shared/types";
import { selectTodoByStatus } from "../../todos/todoSelctor";
import Draggable from "./Draggable";
import FilterBtn from "./FilterBtn";

type Props = {
	status: TodoStatus;
	className?: string;
};

export type FilterBy = "none" | "dueDateAsc" | "dueDateDesc";

const KanBanColumn = ({ status, className }: Props) => {
	const [filterBy, setFilterBy] = useState<FilterBy>("none");
	const { setNodeRef } = useDroppable({ id: status });

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
		<div className={`w-full ${className}`} ref={setNodeRef}>
			<div
				className={`w-full p-4 shadow  flex justify-between items-center rounded-xl  bg-blue-400 `}
			>
				<h1 className="text-lg text-gray-600">{TodoStatusLabel[status]}</h1>
				{status !== "done" && <FilterBtn onClick={setFilterBy} />}
			</div>
			<div className="space-y-2 py-2 max-h-[28vh] sm:max-h-[50vh] lg:max-h-[90vh] min-h-[10vh] overflow-auto">
				{todos.length === 0 && (
					<div className="text-center text-gray-500 py-4">
						Nothing To See Here!!
					</div>
				)}
				{getFilteredTodos().map((todo) => (
					<Draggable key={todo.id} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default KanBanColumn;
