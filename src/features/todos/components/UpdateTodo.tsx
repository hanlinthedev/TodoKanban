import { Pencil } from "lucide-react";
import { useState } from "react";
import type { Todo } from "../../../shared/types";
import { useTodos } from "../hooks/useTodos";
import TodoFormModal from "./TodoForm";

type Props = {
	oldTodo: Todo;
};

const UpdateTodo = ({ oldTodo }: Props) => {
	const [showModal, setShowModal] = useState(false);
	const { editTodoFn } = useTodos();
	const { id, status, ...restTodo } = oldTodo;
	return (
		<>
			<Pencil
				size={18}
				className="cursor-pointer hover:scale-105"
				onClick={() => setShowModal(true)}
			/>
			<TodoFormModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				initialData={restTodo}
				modalTitle="Update Todo"
				confirmButtonLabel="Update"
				onSubmit={(todo) => editTodoFn({ ...todo, status, id })}
			/>
		</>
	);
};

export default UpdateTodo;
