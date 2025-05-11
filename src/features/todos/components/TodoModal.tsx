import { useState } from "react";
import Button from "../../../shared/components/Button";
import {
	Modal,
	ModalHeader,
	ModalTitle,
} from "../../../shared/components/Modal";

type Props = {
	modalTitle: string;
	modalTriggerText: string | ((openModal: () => void) => React.ReactNode);
	children: (closeModal: () => void) => React.ReactNode;
};

const TodoModal = ({ modalTitle, children, modalTriggerText }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			{typeof modalTriggerText === "string" ? (
				<Button onClick={() => setIsModalOpen(true)}>{modalTriggerText}</Button>
			) : (
				modalTriggerText(() => setIsModalOpen(true))
			)}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<ModalHeader>
					<ModalTitle>{modalTitle}</ModalTitle>
				</ModalHeader>
				{children(() => setIsModalOpen(false))}
			</Modal>
		</>
	);
};
export default TodoModal;
