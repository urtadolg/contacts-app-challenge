import { SortedContactsList } from "~/types";
import { getCategoriesList } from "./contacts";

export const handleCategoriesList = (
	contactsList: SortedContactsList,
	searchTerm: string
) => {
	const availableCategoriesList = getCategoriesList(contactsList);
	const searchTermCategory = searchTerm.charAt(0).toUpperCase();

	if (searchTerm.length === 0) {
		return availableCategoriesList;
	}

	if (!availableCategoriesList.includes(searchTermCategory)) {
		return [];
	}

	return [searchTerm.charAt(0).toUpperCase()];
};
