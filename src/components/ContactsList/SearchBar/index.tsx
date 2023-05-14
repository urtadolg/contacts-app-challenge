import { ChangeEvent, useState } from "react";
import { Input, CustomIcon } from "~/components";
import { SearchBarContainer } from "./styles";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const onSearchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.currentTarget.value);
	};

	return (
		<SearchBarContainer>
			<Input
				placeholder="Procurar..."
				onChange={onSearchChangeHandler}
				value={searchTerm}
			/>
			<CustomIcon name="Search" />
		</SearchBarContainer>
	);
};

export default SearchBar;
