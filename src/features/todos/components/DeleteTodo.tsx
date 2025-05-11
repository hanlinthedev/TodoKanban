import { Trash } from "lucide-react";
import { useState } from "react";
import Button from "../../../shared/components/Button";
import {
	Modal,
	ModalHeader,
	ModalTitle,
} from "../../../shared/components/Modal";
import { useTodos } from "../hooks/useTodos";

type Props = {
	id: string;
	title: string;
};

const DeleteTodo = ({ id, title }: Props) => {
	const [showDeleteTodoModal, setShowDeleteTodoModal] = useState(false);
	const { removeTodoFn } = useTodos();

	return (
		<>
			<Trash
				size={18}
				className="cursor-pointer hover:scale-105"
				onClick={() => setShowDeleteTodoModal(true)}
			/>
			<Modal
				isOpen={showDeleteTodoModal}
				onClose={() => setShowDeleteTodoModal(false)}
			>
				<ModalHeader>
					<ModalTitle>Delete Todo: {title}</ModalTitle>
				</ModalHeader>
				<div className="mt-4">
					<p className="text-sm text-gray-600">
						Are you sure to DELETE this Todo?
					</p>
					<div className="flex justify-center sm:justify-end gap-2 mt-4">
						<Button
							onClick={() => setShowDeleteTodoModal(false)}
							variant="outline"
						>
							Cancel
						</Button>
						<Button
							onClick={() => {
								removeTodoFn(id);
								setShowDeleteTodoModal(false);
							}}
							variant="danger"
						>
							Delete
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default DeleteTodo;
