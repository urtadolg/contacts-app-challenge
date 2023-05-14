import { AxiosInstance } from "axios";
import { IContactData } from "~/types";

export const updateContact = async (
	api: AxiosInstance,
	contactData: IContactData
) => {
	const { data } = await api.put(`contacts/${contactData.id}`, contactData);
	return data;
};
