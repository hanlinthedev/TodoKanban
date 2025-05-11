import { Pencil } from "lucide-react";
import type { Todo } from "../../../shared/types";
import { useTodos } from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoModal from "./TodoModal";

type Props = {
	oldTodo: Todo;
};

const UpdateTodo = ({ oldTodo }: Props) => {
	const { editTodoFn } = useTodos();
	const { id, status, ...restTodo } = oldTodo;
	return (
		status !== "done" && (
			<TodoModal
				modalTriggerText={(openModal) => (
					<Pencil
						size={18}
						className="cursor-pointer hover:scale-105"
						onClick={openModal}
					/>
				)}
				modalTitle="Update Todo"
			>
				{(closeModal) => (
					<TodoForm
						initialData={restTodo}
						confirmButtonLabel="Update"
						onSubmit={(todo) => editTodoFn({ ...todo, status, id })}
						closeModal={closeModal}
					/>
				)}
			</TodoModal>
		)
	);
};

export default UpdateTodo;
