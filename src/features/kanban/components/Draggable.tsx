import { useDraggable } from "@dnd-kit/core";
import type { Todo } from "../../../shared/types";
import { TodoCard } from "../../todos/components";

type Props = {
	todo: Todo;
};
const Draggable = ({ todo }: Props) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: todo.id,
		data: todo,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;
	return (
		<div ref={setNodeRef} style={style} className="cursor-grab">
			<TodoCard todo={todo} listeners={listeners} attributes={attributes} />
		</div>
	);
};

export default Draggable;
