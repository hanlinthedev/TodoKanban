import { useDraggable } from "@dnd-kit/core";
import type { Todo } from "../../../shared/types";

type Props = {
	todo: Todo;
	children: React.ReactNode;
};
const Draggable = ({ todo, children }: Props) => {
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
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className="cursor-grab"
		>
			{children}
		</div>
	);
};

export default Draggable;
