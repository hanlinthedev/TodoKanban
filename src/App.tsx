import KanBanBoard from "./features/kanban/components/KanBanBoard";
import Header from "./shared/components/Header";

function App() {
	return (
		<main className="container min-h-dvh shadow mx-auto ">
			<Header />
			<KanBanBoard />
		</main>
	);
}

export default App;
