import type { ChangeEvent } from "react";

type Props = {
	name: string;
	placeholder: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ name, placeholder, value, onChange }: Props) => {
	return (
		<input
			type="text"
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			className="indent-5 py-2 rounded-xl border border-gray-400 focus:outline-gray-500 invalid:outline-red-500"
		/>
	);
};

export default Input;
