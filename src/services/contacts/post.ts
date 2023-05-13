import { AxiosInstance } from "axios";
import { IContactData } from "~/types";

export const addNewContact = async (
	api: AxiosInstance,
	contactData: IContactData
) => {
	const { data } = await api.post("contacts", contactData);
	return data;
};
