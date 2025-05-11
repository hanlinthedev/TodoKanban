import { ArrowUpFromLine, CheckCheck, Trash } from "lucide-react";
import { useState } from "react";
import { DeleteTodo, UpdateTodo } from ".";
import type { Todo } from "../../../shared/types";
import { changeToLocaleDateString } from "../../../shared/utils";
import { useTodos } from "../hooks/useTodos";

type Props = {
	todo: Todo;
};
const TodoCard = ({ todo }: Props) => {
	const [showDeleteTodoModal, setShowDeleteTodoModal] = useState(false);
	const { removeTodoFn, updateTodoStatusFn } = useTodos();

	return (
		<div className="border-blue-400 text-gray-600 bg-blue-300  rounded-xl border flex px-3 justify-between items-start py-2 transition group">
			<div>
				<h1>{todo.title}</h1>
				<p className=" hidden group-hover:block ">{todo.description}</p>
				<span className="text-gray-100 text-xs">
					Due : {changeToLocaleDateString(todo.dueDate)}
				</span>
			</div>
			<div className="flex gap-2 mt-2">
				<Trash
					size={18}
					className="cursor-pointer hover:scale-105"
					onClick={(e) => {
						e.stopPropagation();
						e.preventDefault();
						setShowDeleteTodoModal(true);
					}}
				/>
				<DeleteTodo
					isOpen={showDeleteTodoModal}
					onClose={() => setShowDeleteTodoModal(false)}
					onConfirm={() => removeTodoFn(todo.id)}
					title={`Delete Todo : ${todo.title}`}
				/>
				{todo.status !== "done" && <UpdateTodo oldTodo={todo} />}
				{todo.status === "todo" ? (
					<ArrowUpFromLine
						size={18}
						className="cursor-pointer hover:scale-105"
						onClick={() => updateTodoStatusFn(todo.id, "inProgress")}
					/>
				) : todo.status === "inProgress" ? (
					<CheckCheck
						size={18}
						className="cursor-pointer hover:scale-105"
						onClick={() => updateTodoStatusFn(todo.id, "done")}
					/>
				) : null}
			</div>
		</div>
	);
};

export default TodoCard;
