import KanBanColumn from "./KanBanColumn";

const KanBanBoard = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container-padding justify-center">
			<KanBanColumn status="todo" />
			<KanBanColumn status="inProgress" />
			<KanBanColumn status="done" />
		</div>
	);
};

export default KanBanBoard;
