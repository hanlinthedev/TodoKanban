import {
	ArrowDownWideNarrow,
	ArrowUpNarrowWide,
	Funnel,
	FunnelX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FilterBy } from "./KanBanColumn";

type Props = {
	onClick: (filterBy: FilterBy) => void;
};
const FilterBtn = ({ onClick }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropDownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropDownRef.current &&
				//this will check if the click is outside the dropdown
				!dropDownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleClick = (filterBy: FilterBy) => {
		onClick(filterBy);
		setIsOpen(false);
	};

	return (
		<div className="relative" ref={dropDownRef}>
			<Funnel
				onClick={() => setIsOpen((prev) => !prev)}
				size={18}
				className="cursor-pointer hover:scale-105 text-gray-600"
			/>
			{isOpen && (
				<div className="absolute -left-48 text-sm shadow-md mt-2 w-48 z-40 bg-white rounded-lg p-2 cursor-pointer">
					<div
						className="px-4 py-2 flex gap-2 bg-gray-100 hover:bg-gray-200 rounded-xl mb-1 text-sm justify-center items-center"
						onClick={() => handleClick("dueDateAsc")}
					>
						<ArrowUpNarrowWide />
						<span className="text-gray-600">Ascend Due</span>
					</div>
					<div
						className="px-4 py-2 flex gap-2 bg-gray-100 hover:bg-gray-200 rounded-xl mb-1 text-sm justify-center items-center"
						onClick={() => handleClick("dueDateDesc")}
					>
						<ArrowDownWideNarrow />
						<span className="text-gray-600">Descend Due</span>
					</div>
					<div
						className="px-4 py-2 flex gap-2 bg-gray-100 hover:bg-gray-200 rounded-xl mb-1 text-sm justify-center items-center"
						onClick={() => handleClick("none")}
					>
						<FunnelX />
						<span className="text-gray-600">None</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default FilterBtn;
