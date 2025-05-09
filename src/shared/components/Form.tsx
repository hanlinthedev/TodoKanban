type Props = { children: React.ReactNode };

const Form = ({ children }: Props) => {
	return <form className="flex flex-col gap-4 w-full pt-4">{children}</form>;
};

export default Form;
