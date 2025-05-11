import type { DraggableAttributes } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { DeleteTodo, UpdateTodo } from ".";
import type { Todo } from "../../../shared/types";
import { changeToLocaleDateString } from "../../../shared/utils";
import UpdateTodoStatus from "./UpdateTodoStatus";

type Props = {
	todo: Todo;
	listeners?: SyntheticListenerMap;
	attributes?: DraggableAttributes;
};
const TodoCard = ({ todo, listeners, attributes }: Props) => {
	return (
		<div className="border-blue-400 text-gray-600 bg-blue-300  rounded-xl border flex px-3 justify-between items-start py-2 transition group relative">
			<div>
				<h1>{todo.title}</h1>
				<p className=" hidden group-hover:block  text-sm">{todo.description}</p>
				<span className="text-gray-100 text-xs">
					Due : {changeToLocaleDateString(todo.dueDate)}
				</span>
			</div>
			<div
				className="w-full h-full absolute opacity-0 top-0 left-0 z-10"
				{...listeners}
				{...attributes}
			></div>
			<div className="flex gap-2 mt-2 z-50">
				<DeleteTodo id={todo.id} title={todo.title} />
				<UpdateTodo oldTodo={todo} />
				<UpdateTodoStatus id={todo.id} status={todo.status} />
			</div>
		</div>
	);
};

export default TodoCard;
