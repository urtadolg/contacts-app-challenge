import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactsService, useHttp } from "~/services";
import { SortedContactsList, ContactFormData, IContactData } from "~/types";
import {
	triggerErrorMessage,
	triggerSuccessMessage,
	parseFormData,
	sortByNameInitials,
} from "~/utils";
import ContactsContext from "./contacts-context";
import { v4 as uuidv4 } from "uuid";

const ContactsProvider = ({ children }: { children: ReactNode }) => {
	const [contactsList, setContactsList] = useState<SortedContactsList>({});
	const [contactDetails, setContactDetails] = useState<IContactData>();
	const [isLoading, setIsLoading] = useState(false);

	const api = useHttp();
	const navigate = useNavigate();

	const saveNewContact = async (contactFormData: ContactFormData) => {
		try {
			setIsLoading(true);

			const parsedContactData = parseFormData(contactFormData, uuidv4());

			await ContactsService.saveNewContact(api, parsedContactData);

			triggerSuccessMessage("Contato salvo com sucesso!");

			navigate("/contacts", { replace: true });
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

	const getContactDetails = async (contactId: string) => {
		try {
			setIsLoading(true);

			const contactDetails = await ContactsService.getContactDetails(
				api,
				contactId
			);

			setContactDetails(contactDetails);
		} catch (error) {
			triggerErrorMessage("Erro ao carregar detalhes do contato...");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const updateContact = async (
		contactFormData: ContactFormData,
		contactId: string
	) => {
		try {
			setIsLoading(true);

			const parsedContactData = parseFormData(contactFormData, contactId);

			await ContactsService.updateContact(api, parsedContactData);

			triggerSuccessMessage("Contato atualizado com sucesso!");

			navigate("/contacts", { replace: true });
		} catch (error) {
			triggerErrorMessage("Erro ao salvar dados do contato...");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteContact = async (contactId: string) => {
		try {
			setIsLoading(true);

			await ContactsService.deleteContact(api, contactId);

			triggerSuccessMessage("Contato deletado com sucesso!");

			navigate("/contacts", { replace: true });
		} catch (error) {
			triggerErrorMessage("Erro ao excluir contato...");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const value = {
		saveNewContact,
		updateContact,
		deleteContact,
		getContactsList,
		getContactDetails,
		contactsList,
		contactDetails,
		isLoading,
	};

	return (
		<ContactsContext.Provider value={value}>
			{children}
		</ContactsContext.Provider>
	);
};

export default ContactsProvider;
