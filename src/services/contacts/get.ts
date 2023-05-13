import { AxiosInstance } from "axios";
import { IContactData } from "~/types";

export const getContactsList = async (
	api: AxiosInstance
): Promise<IContactData[]> => {
	const { data } = await api.get("/contacts");
	return data;
};
