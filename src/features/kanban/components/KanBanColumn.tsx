import { useSelector } from "react-redux";
import type { TodoStatus } from "../../../shared/types";
import { selectTodoByStatus } from "../../todos/todoSelctor";
import TodoCard from "./TodoCard";

type Props = {
	status: TodoStatus;
};

const KanBanColumn = ({ status }: Props) => {
	const TodoStatusLabel: Record<TodoStatus, string> = {
		todo: "To do",
		inProgress: "In Progress",
		done: "Done",
	};

	const todos = useSelector(selectTodoByStatus(status));
	console.log(status, todos);

	return (
		<div className="w-full shadow  md:min-h-svh">
			<div className="w-full p-4 shadow  flex justify-between">
				<h1>{TodoStatusLabel[status]}</h1>
				<h2>8</h2>
			</div>
			<div className="space-y-2 px-2 py-2">
				{todos.map((todo) => (
					<TodoCard key={todo.title} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default KanBanColumn;
