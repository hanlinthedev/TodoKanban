import Button from "../../../shared/components/Button";
import {
	Modal,
	ModalHeader,
	ModalTitle,
} from "../../../shared/components/Modal";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title?: string;
	message?: string;
};

const DeleteTodo = ({
	isOpen,
	onClose,
	onConfirm,
	title = "Delete Todo",
	message = "Are you sure you want to delete this todo?",
}: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader>
				<ModalTitle>{title}</ModalTitle>
			</ModalHeader>
			<div className="mt-4">
				<p className="text-sm text-gray-600">{message}</p>
				<div className="flex justify-center sm:justify-end gap-2 mt-4">
					<Button onClick={onClose} variant="outline">
						Cancel
					</Button>
					<Button
						onClick={() => {
							onConfirm();
							onClose();
						}}
						variant="danger"
					>
						Delete
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteTodo;
