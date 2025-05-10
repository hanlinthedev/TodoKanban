type Variant = "primary" | "secondary" | "danger" | "outline";

type BtnType = "button" | "submit";
type Props = {
	children: React.ReactNode;
	variant?: Variant;
	onClick: () => void;
	type?: BtnType;
	disabled?: boolean;
};

const Button = ({
	children,
	onClick,
	variant = "primary",
	type = "button",
	disabled = false,
}: Props) => {
	const color: Record<Variant, string> = {
		primary: " bg-blue-500 text-white hover:bg-blue-600",
		danger: "bg-red-500 text-white hover:bg-red-600",
		secondary: "bg-gray-500 text-white hover:bg-gray-600",
		outline:
			"border inset border-gray-500 text-black hover:bg-gray-600 hover:text-white",
	};

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type}
			className={`min-w-32 flex justify-center items-center gap-2 disabled:cursor-not-allowed cursor-pointer ${color[variant]}  rounded-xl px-4 py-2 `}
		>
			{children}
		</button>
	);
};

export default Button;
