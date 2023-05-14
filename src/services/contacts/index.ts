import { AxiosInstance } from "axios";
import { IContactData } from "~/types";
import { getContactsList, getContactDetails } from "./get";
import { addNewContact } from "./post";
import { updateContact } from "./put";
import { deleteContact } from "./delete";

class ContactsService {
	getAllContacts = async (api: AxiosInstance): Promise<IContactData[]> =>
		await getContactsList(api);

	saveNewContact = async (
		api: AxiosInstance,
		contactData: IContactData
	): Promise<void> => await addNewContact(api, contactData);

	getContactDetails = async (
		api: AxiosInstance,
		contactId: string
	): Promise<IContactData> => await getContactDetails(api, contactId);

	updateContact = async (
		api: AxiosInstance,
		contactData: IContactData
	): Promise<void> => await updateContact(api, contactData);

	deleteContact = async (
		api: AxiosInstance,
		contactId: string
	): Promise<void> => await deleteContact(api, contactId);
}

export default new ContactsService();
