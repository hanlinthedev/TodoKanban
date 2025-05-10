import { useState, type ChangeEvent } from "react";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import {
	Modal,
	ModalHeader,
	ModalTitle,
} from "../../../shared/components/Modal";
import type { Todo } from "../../../shared/types";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (todo: NewTodo) => void;
	modalTitle: string;
	confirmButtonLabel: string;
	initialData?: NewTodo;
};

type NewTodo = Omit<Todo, "id" | "status">;

const TodoFormModal = ({
	isOpen,
	onClose,
	onSubmit,
	modalTitle,
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
		onClose();
		setNewTodo(initialData);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader>
				<ModalTitle>{modalTitle}</ModalTitle>
			</ModalHeader>
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
					<Button onClick={onClose} variant="outline">
						Cancel
					</Button>
					<Button disabled={isSubmitBtnDisabled} onClick={handleSubmit}>
						{confirmButtonLabel}
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default TodoFormModal;
