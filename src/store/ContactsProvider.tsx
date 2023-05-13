import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactsService, useHttp } from "~/services";
import { SortedContactsList, ContactFormData } from "~/types";
import {
	triggerErrorMessage,
	triggerSuccessMessage,
	parseFormData,
	sortByNameInitials,
	updateLocalContactsListState,
} from "~/utils";
import ContactsContext from "./contacts-context";

const ContactsProvider = ({ children }: { children: ReactNode }) => {
	const [contactsList, setContactsList] = useState<SortedContactsList>({});
	const [isLoading, setIsLoading] = useState(false);

	const api = useHttp();
	const navigate = useNavigate();

	const saveNewContact = async (contactFormData: ContactFormData) => {
		try {
			setIsLoading(true);

			const parsedContactData = parseFormData(contactFormData);

			await ContactsService.saveNewContact(api, parsedContactData);

			updateLocalContactsListState(parsedContactData, setContactsList);

			triggerSuccessMessage("Contato salvo com sucesso!");

			navigate("/contacts");
		} catch (error) {
			triggerErrorMessage("Erro ao salvar novo contato...");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const getContactsList = async () => {
		try {
			setIsLoading(true);

			const contactsListResponse = await ContactsService.getAllContacts(api);

			const sortedContactsList = sortByNameInitials(contactsListResponse);

			setContactsList(sortedContactsList);
		} catch (error) {
			triggerErrorMessage("Erro ao carregar lista de contatos...");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const value = {
		saveNewContact,
		getContactsList,
		contactsList,
		isLoading,
	};

	return (
		<ContactsContext.Provider value={value}>
			{children}
		</ContactsContext.Provider>
	);
};

export default ContactsProvider;
