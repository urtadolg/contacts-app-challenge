import { SortedContactsList } from "~/types";

export interface SearchBarContainerParams {
	$isSearchSuggestionsOpened: boolean;
}

export interface SearchBarParams {
	contactsList: SortedContactsList;
}
