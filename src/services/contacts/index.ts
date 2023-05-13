import { AxiosInstance } from "axios";
import { IContactData } from "~/types";
import { getContactsList } from "./get";
import { addNewContact } from "./post";

class ContactsService {
	getAllContacts = async (api: AxiosInstance): Promise<IContactData[]> =>
		await getContactsList(api);

	saveNewContact = async (
		api: AxiosInstance,
		contactData: IContactData
	): Promise<IContactData> => await addNewContact(api, contactData);
}

export default new ContactsService();
