import { AddTodo } from "../../features/todos/components";

const Header = () => {
	return (
		<nav className="flex justify-between items-center container-padding shadow sticky top-0 bg-gray-300">
			<h1 className="text-xl font-semibold text-gray-700">To-do List</h1>
			<AddTodo />
		</nav>
	);
};

export default Header;
