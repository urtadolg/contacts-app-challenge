import { createContext } from "react";
import { ContactFormData, SortedContactsList } from "~/types";

interface ContactsContextProps {
	saveNewContact: (data: ContactFormData) => void;
	getContactsList: () => void;
	contactsList: SortedContactsList;
	isLoading: boolean;
}

const ContactsContext = createContext<ContactsContextProps>({
	saveNewContact: (data) => undefined,
	getContactsList: () => undefined,
	contactsList: {},
	isLoading: false,
});

export default ContactsContext;
