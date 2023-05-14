import { createContext } from "react";
import { ContactFormData, IContactData, SortedContactsList } from "~/types";

interface ContactsContextProps {
	saveNewContact: (data: ContactFormData) => void;
	updateContact: (contactData: ContactFormData, contactId: string) => void;
	deleteContact: (contactId: string) => void;
	getContactsList: () => void;
	getContactDetails: (contactId: string) => void;
	contactsList: SortedContactsList;
	contactDetails?: IContactData;
	isLoading: boolean;
}

const ContactsContext = createContext<ContactsContextProps>({
	saveNewContact: (data) => undefined,
	updateContact: (contactData, contactId) => undefined,
	deleteContact: (contactId) => undefined,
	getContactsList: () => undefined,
	getContactDetails: () => undefined,
	contactsList: {},
	contactDetails: undefined,
	isLoading: false,
});

export default ContactsContext;
