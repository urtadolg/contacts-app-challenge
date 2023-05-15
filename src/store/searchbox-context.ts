import { createContext, Dispatch, SetStateAction } from "react";

interface SearchBarContextProps {
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBarContext = createContext<SearchBarContextProps>({
	searchTerm: "",
	setSearchTerm: () => undefined,
});

export default SearchBarContext;
