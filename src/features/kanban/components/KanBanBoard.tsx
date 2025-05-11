import {
	DndContext,
	DragOverlay,
	type DragEndEvent,
	type DragStartEvent,
} from "@dnd-kit/core";
import { useState } from "react";
import type { Todo, TodoStatus } from "../../../shared/types";
import { TodoCard } from "../../todos/components";
import { useTodos } from "../../todos/hooks/useTodos";
import KanBanColumn from "./KanBanColumn";

const KanBanBoard = () => {
	const [activelyDraggedTodo, setActivelyDraggedTodo] = useState<Todo | null>(
		null
	);
	const { updateTodoStatusFn } = useTodos();

	const handleDragStart = (e: DragStartEvent) => {
		console.log(e.active.data.current);
		setActivelyDraggedTodo(e.active.data.current as Todo);
	};
	const handleDragEnd = (e: DragEndEvent) => {
		const { active, over } = e;
		if (!over?.id || active.id === over?.id) return;
		updateTodoStatusFn(active.id as string, over?.id as TodoStatus);
		setActivelyDraggedTodo(null);
	};

	return (
		<DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
			<DragOverlay>
				{activelyDraggedTodo && <TodoCard todo={activelyDraggedTodo} />}
			</DragOverlay>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container-padding justify-center">
				<KanBanColumn
					status="todo"
					className="col-span-1 sm:col-span-2 lg:col-span-1"
				/>
				<KanBanColumn status="inProgress" />
				<KanBanColumn status="done" />
			</div>
		</DndContext>
	);
};

export default KanBanBoard;
