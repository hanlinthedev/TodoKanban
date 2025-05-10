import { X } from "lucide-react"; // Or any close icon
import { useEffect } from "react";

export const Modal = ({
	isOpen,
	onClose,
	children,
}: {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}) => {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [onClose]);

	if (!isOpen) return null;

	return (
		<div
			className={`fixed inset-0 z-50 ${
				isOpen ? "flex" : "none"
			} items-center justify-center `}
		>
			<div
				className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
				onClick={onClose}
			/>
			<div className="relative z-50 w-full max-w-xs sm:max-w-md rounded-lg bg-white shadow-xl">
				<button
					onClick={onClose}
					className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
				>
					<X className="h-5 w-5" />
					<span className="sr-only">Close</span>
				</button>
				<div className="p-6">{children}</div>
			</div>
		</div>
	);
};

export const ModalHeader = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}
	>
		{children}
	</div>
);

export const ModalTitle = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<h3
		className={`text-lg font-semibold leading-none tracking-tight ${className}`}
	>
		{children}
	</h3>
);

export const ModalDescription = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
);

export const ModalFooter = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
	>
		{children}
	</div>
);
