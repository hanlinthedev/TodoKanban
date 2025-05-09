import { AddTodo } from "../../features/todos/components";

const Header = () => {
	return (
		<nav className="flex justify-between items-center container-padding shadow">
			<h1>To-do List</h1>
			<AddTodo />
		</nav>
	);
};

export default Header;
