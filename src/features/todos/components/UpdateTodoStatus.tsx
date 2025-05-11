import { ArrowUpFromLine, CheckCheck } from "lucide-react";
import type { TodoStatus } from "../../../shared/types";
import { useTodos } from "../hooks/useTodos";

type Props = {
	id: string;
	status: TodoStatus;
};

const UpdateTodoStatus = ({ id, status }: Props) => {
	const { updateTodoStatusFn } = useTodos();
	return status === "todo" ? (
		<ArrowUpFromLine
			size={18}
			className="cursor-pointer hover:scale-105"
			onClick={() => updateTodoStatusFn(id, "inProgress")}
		/>
	) : status === "inProgress" ? (
		<CheckCheck
			size={18}
			className="cursor-pointer hover:scale-105"
			onClick={() => updateTodoStatusFn(id, "done")}
		/>
	) : null;
};

export default UpdateTodoStatus;
