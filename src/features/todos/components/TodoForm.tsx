import { useState, type ChangeEvent } from "react";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import type { Todo } from "../../../shared/types";

type Props = {
	onSubmit: (todo: NewTodo) => void;
	closeModal: () => void;
	confirmButtonLabel: string;
	initialData?: NewTodo;
};

type NewTodo = Omit<Todo, "id" | "status">;

const TodoForm = ({
	onSubmit,
	closeModal,
	confirmButtonLabel,
	initialData = {
		title: "",
		description: "",
		dueDate: Date.now(),
	},
}: Props) => {
	const [newTodo, setNewTodo] = useState(initialData);
	const { title, description, dueDate } = newTodo;

	const isSubmitBtnDisabled = [title, dueDate].some((value) => !value);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewTodo((prev: NewTodo) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = () => {
		onSubmit(newTodo);
		closeModal();
		setNewTodo(initialData);
	};

	return (
		<form className="flex flex-col gap-4 w-full py-4">
			<Input
				name="title"
				placeholder="Todo"
				value={title}
				onChange={handleChange}
			/>
			<Input
				name="description"
				placeholder="Description"
				value={description as string}
				onChange={handleChange}
			/>
			<Input
				type="date"
				name="dueDate"
				value={new Date(dueDate).toISOString().split("T")[0]}
				className="pr-2"
				placeholder="Due Date"
				onChange={handleChange}
			/>
			<div className="flex gap-2 justify-end">
				<Button onClick={closeModal} variant="outline">
					Cancel
				</Button>
				<Button disabled={isSubmitBtnDisabled} onClick={handleSubmit}>
					{confirmButtonLabel}
				</Button>
			</div>
		</form>
	);
};

export default TodoForm;
