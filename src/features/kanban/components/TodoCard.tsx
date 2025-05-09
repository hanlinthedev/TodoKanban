import type { Todo } from "../../../shared/types";

type Props = {
	todo: Todo;
};
const TodoCard = ({ todo }: Props) => {
	return (
		<div className="rounded-xl border border-gray-500 flex px-3 justify-between py-2">
			<div>{todo.title}</div>
			<div>[0][0][0]</div>
		</div>
	);
};

export default TodoCard;
