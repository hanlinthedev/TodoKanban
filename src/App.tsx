import KanBanBoard from "./features/kanban/components/KanBanBoard";
import Header from "./shared/components/Header";

function App() {
	return (
		<main className="container min-h-dvh shadow mx-auto  bg-gradient-to-b from-gray-300 to-gray-300/80">
			<Header />
			<KanBanBoard />
		</main>
	);
}

export default App;
