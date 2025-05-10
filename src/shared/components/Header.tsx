import { AddTodo } from "../../features/todos/components";

const Header = () => {
	return (
		<nav className="flex justify-between items-center container-padding shadow sticky top-0 bg-gray-300">
			<h1>To-do List</h1>
			<AddTodo />
		</nav>
	);
};

export default Header;
