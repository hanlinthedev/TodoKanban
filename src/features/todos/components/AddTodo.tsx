import { useState, type ChangeEvent } from "react";
import Button from "../../../shared/components/Button";
import Form from "../../../shared/components/Form";
import Input from "../../../shared/components/Input";
import {
	Modal,
	ModalHeader,
	ModalTitle,
} from "../../../shared/components/Modal";

const AddTodo = () => {
	const [showModal, setShowModal] = useState(true);
	const [newTodo, setNewTodo] = useState({
		title: "",
		description: "",
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
					/>
					<Input
						name="description"
						placeholder="Description"
						value={newTodo.description}
						onChange={handleNewTodoChange}
					/>
					<div className="flex gap-2 justify-end  items-center">
						<Button onClick={() => setShowModal(false)} variant="outline">
							Cancel
						</Button>
						<Button onClick={() => setShowModal(false)}>Add</Button>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default AddTodo;
