import { useAppSelector } from "../../../app/hooks";
import type { Todo } from "../../../shared/types";
import KanBanColumn from "./KanBanColumn";

const KanBanBoard = () => {
	const todos: Todo[] = useAppSelector((state) => state.todos);
	console.log(todos);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container-padding justify-center">
			<KanBanColumn status="todo" />
			<KanBanColumn status="inProgress" />
			<KanBanColumn status="done" />
		</div>
	);
};

export default KanBanBoard;
