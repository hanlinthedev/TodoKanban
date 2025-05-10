import { useAppDispatch } from "../../../app/hooks";
import type { Todo, TodoStatus } from "../../../shared/types";
import { addTodo, editTodo, removeTodo, updateTodoStatus } from "../todoSlice";
export const useTodos = () => {
	const dispatch = useAppDispatch();

	const addTodoFn = (todo: Todo) => {
		dispatch(addTodo(todo));
	};
	const removeTodoFn = (id: string) => {
		dispatch(removeTodo(id));
	};
	const editTodoFn = (todo: Todo) => {
		dispatch(editTodo(todo));
	};
	const updateTodoStatusFn = (id: string, status: TodoStatus) => {
		dispatch(updateTodoStatus({ id, status }));
	};

	return {
		addTodoFn,
		editTodoFn,
		removeTodoFn,
		updateTodoStatusFn,
	};
};
