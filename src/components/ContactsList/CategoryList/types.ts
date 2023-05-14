import { SortedContactsList } from "~/types";

export interface CategoryListProps {
	categoriesList: string[];
	contactsList: SortedContactsList;
	handleContactSelect: (contactId: string) => void;
}
