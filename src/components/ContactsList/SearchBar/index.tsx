import { ChangeEvent, useContext, useRef, useState } from "react";
import { Input, CustomIcon, Text } from "~/components";
import { useOnClickOutside } from "~/hooks";
import { SearchBoxContext } from "~/store";
import {
	SearchSuggestionsContainer,
	SearchBarContainer,
	SearchBarWrapper,
} from "./styles";
import { SearchBarParams } from "./types";

const SearchBar = ({ contactsList }: SearchBarParams) => {
	const { searchTerm, setSearchTerm } = useContext(SearchBoxContext);
	const [isSearchSuggestionsOpened, setIsSearchSuggestionsOpened] =
		useState(false);

	const searchInputRef = useRef<HTMLInputElement>(null);
	useOnClickOutside(() => setIsSearchSuggestionsOpened(false), searchInputRef);

	const selectedList =
		contactsList[`${searchTerm.charAt(0).toUpperCase()}`] || [];

	const onSearchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.currentTarget.value);
	};

	const handleSelectItem = (name: string) => {
		setSearchTerm(name);
		setIsSearchSuggestionsOpened(false);
	};

	const onInputFocusHandler = () => {
		setIsSearchSuggestionsOpened(true);
	};

	const handleClearSearchTerm = () => {
		setSearchTerm("");
	};

	return (
		<SearchBarWrapper ref={searchInputRef}>
			<SearchBarContainer
				$isSearchSuggestionsOpened={
					isSearchSuggestionsOpened && searchTerm.length > 0
				}
			>
				<Input
					placeholder="Procurar..."
					onChange={onSearchChangeHandler}
					value={searchTerm}
					onFocus={onInputFocusHandler}
				/>
				{searchTerm.length > 0 ? (
					<CustomIcon
						name="Cancel"
						style={{ cursor: "pointer" }}
						onClick={handleClearSearchTerm}
					/>
				) : (
					<CustomIcon name="Search" />
				)}
			</SearchBarContainer>
			{selectedList.length > 0 && isSearchSuggestionsOpened && (
				<SearchSuggestionsContainer>
					<ul>
						{selectedList.map((item) => (
							<li
								key={item.id}
								onClick={handleSelectItem.bind(this, item.name)}
							>
								<CustomIcon name="Search" />
								<Text>{item.name}</Text>
							</li>
						))}
					</ul>
				</SearchSuggestionsContainer>
			)}
		</SearchBarWrapper>
	);
};

export default SearchBar;
