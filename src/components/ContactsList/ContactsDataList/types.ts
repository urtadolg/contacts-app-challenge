import { SortedContactsList } from "~/types";

export interface ContactsDataListProps {
	contactsList: SortedContactsList;
	category: string;
	handleContactSelect: (contactId: string) => void;
}
