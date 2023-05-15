import { ReactNode, useState } from "react";
import SearchBoxContext from "./searchbox-context";

const SearchBoxProvider = ({ children }: { children: ReactNode }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const value = {
		searchTerm,
		setSearchTerm,
	};

	return (
		<SearchBoxContext.Provider value={value}>
			{children}
		</SearchBoxContext.Provider>
	);
};

export default SearchBoxProvider;
