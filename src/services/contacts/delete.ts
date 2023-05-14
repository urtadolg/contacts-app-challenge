import { AxiosInstance } from "axios";

export const deleteContact = async (
	api: AxiosInstance,
	contactId: string
): Promise<void> => await api.delete(`/contacts/${contactId}`);
