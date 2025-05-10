import { useState, type ChangeEvent } from "react";
import Button from "../../../shared/components/Button";
import Form from "../../../shared/components/Form";
import Input from "../../../shared/components/Input";
import {
	Modal,
	ModalHeader,
	ModalTitle,
} from "../../../shared/components/Modal";
import { addIdAndStatus } from "../../../shared/utils";
import { useTodos } from "../hooks/useTodos";

const AddTodo = () => {
	const [showModal, setShowModal] = useState(false);
	const { addTodoFn } = useTodos();
	const [newTodo, setNewTodo] = useState({
		title: "",
		description: "",
		dueDate: Date.now(),
	});

	const handleNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewTodo((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	return (
		<>
			<Button onClick={() => setShowModal(true)}>Add Todo</Button>
			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<ModalHeader>
					<ModalTitle>Create New To-do</ModalTitle>
				</ModalHeader>
				<Form>
					<Input
						name="title"
						placeholder="Todo"
						value={newTodo.title}
						onChange={handleNewTodoChange}
						required
					/>
					<Input
						name="description"
						placeholder="Description"
						value={newTodo.description}
						onChange={handleNewTodoChange}
					/>
					<Input
						type="date"
						name="dueDate"
						placeholder="Due Date"
						className="pr-2"
						value={ new Date(newTodo.dueDate).toISOString().split("T")[0] }
						onChange={handleNewTodoChange}
					/>
					<div className="flex gap-2 justify-end  items-center">
						<Button onClick={() => setShowModal(false)} variant="outline">
							Cancel
						</Button>
						<Button
							onClick={() => {
								addTodoFn(addIdAndStatus(newTodo));
								setShowModal(false);
								setNewTodo({
									title: "",
									description: "",
									dueDate: Date.now(),
								});
							}}
						>
							Add
						</Button>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default AddTodo;
