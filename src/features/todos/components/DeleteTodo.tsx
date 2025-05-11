import { Trash } from "lucide-react";
import Button from "../../../shared/components/Button";
import { useTodos } from "../hooks/useTodos";
import TodoModal from "./TodoModal";

type Props = {
	id: string;
	title: string;
};

const DeleteTodo = ({ id, title }: Props) => {
	const { removeTodoFn } = useTodos();

	return (
		<TodoModal
			modalTriggerText={(openModal) => (
				<Trash
					size={18}
					className="cursor-pointer hover:scale-105"
					onClick={() => openModal()}
				/>
			)}
			modalTitle={`Delete Todo: ${title}`}
		>
			{(closeModal) => (
				<div className="mt-4">
					<p className="text-sm text-gray-600">
						Are you sure to DELETE this Todo?
					</p>
					<div className="flex justify-center sm:justify-end gap-2 mt-4">
						<Button onClick={closeModal} variant="outline">
							Cancel
						</Button>
						<Button
							onClick={() => {
								removeTodoFn(id);
								closeModal();
							}}
							variant="danger"
						>
							Delete
						</Button>
					</div>
				</div>
			)}
		</TodoModal>
	);
};

export default DeleteTodo;
