import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormData, IContactData } from "~/types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContactsContext } from "~/store";
import { contactsSchema, defaultValues } from "~/schema";

const useContactsForm = (initialValue?: IContactData) => {
	const navigate = useNavigate();
	const { saveNewContact, updateContact, isLoading } =
		useContext(ContactsContext);

	const resolver = yupResolver(contactsSchema);

	const methods = useForm<ContactFormData>({
		resolver,
		defaultValues: initialValue || defaultValues,
		mode: "onTouched",
	});

	const onSubmit = async (contactData: ContactFormData) => {
		if (isLoading) return;
		if (initialValue) {
			updateContact(contactData, initialValue.id);
			return;
		}
		await saveNewContact(contactData);
	};

	const onCancel = () => navigate("/contacts", { replace: true });

	return {
		methods,
		onSubmit,
		onCancel,
		isLoading,
	};
};

export default useContactsForm;
