import { useSelector } from "react-redux";
import type { TodoStatus } from "../../../shared/types";
import { TodoCard } from "../../todos/components";
import { selectTodoByStatus } from "../../todos/todoSelctor";

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

	return (
		<div className={`w-full`}>
			<div
				className={`w-full p-4 shadow  flex justify-between rounded-xl  bg-blue-400 `}
			>
				<h1 className="text-lg text-gray-600">{TodoStatusLabel[status]}</h1>
				<h2>8</h2>
			</div>
			<div className="space-y-2 py-2 max-h-[28vh] sm:max-h-[50vh] lg:max-h-[90vh] overflow-auto">
				{todos.map((todo) => (
					<TodoCard key={todo.title} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default KanBanColumn;
