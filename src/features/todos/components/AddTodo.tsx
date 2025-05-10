import { useState } from "react";
import Button from "../../../shared/components/Button";
import { addIdAndStatus } from "../../../shared/utils";
import { useTodos } from "../hooks/useTodos";
import TodoFormModal from "./TodoForm";

const AddTodo = () => {
	const [showModal, setShowModal] = useState(false);
	const { addTodoFn } = useTodos();

	return (
		<>
			<Button onClick={() => setShowModal(true)}>Add Todo</Button>
			<TodoFormModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				modalTitle="Add New Todo"
				confirmButtonLabel="Add"
				onSubmit={(todo) => addTodoFn(addIdAndStatus(todo))}
			/>
		</>
	);
};

export default AddTodo;
