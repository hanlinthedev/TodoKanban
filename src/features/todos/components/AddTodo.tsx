import { addIdAndStatus } from "../../../shared/utils";
import { useTodos } from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoModal from "./TodoModal";

const AddTodo = () => {
	const { addTodoFn } = useTodos();

	return (
		<TodoModal modalTriggerText="Add Todo" modalTitle="Create New Todo">
			{(closeModal) => (
				<TodoForm
					confirmButtonLabel="Add"
					onSubmit={(todo) => addTodoFn(addIdAndStatus(todo))}
					closeModal={closeModal}
				/>
			)}
		</TodoModal>
	);
};

export default AddTodo;
