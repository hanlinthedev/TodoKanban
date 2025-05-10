import type { ChangeEvent } from "react";

type Props = {
	name: string;
	type?: string;
	className?: string;
	placeholder: string;
	value: string;
	required?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({
	name,
	placeholder,
	required = false,
	value,
	onChange,
	type = "text",
	className,
}: Props) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			className={
				"indent-2 py-2 rounded-xl border border-gray-400 focus:outline-gray-500 invalid:outline-red-500 " +
				className
			}
			required={required}
		/>
	);
};

export default Input;
