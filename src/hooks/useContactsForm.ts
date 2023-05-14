import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactsScrema, defaultValues } from "~/constants";
import { ContactFormData, IContactData } from "~/types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContactsContext } from "~/store";

const useContactsForm = (defaultValue?: IContactData) => {
	const navigate = useNavigate();
	const { saveNewContact, updateContact, isLoading } =
		useContext(ContactsContext);

	const resolver = yupResolver(contactsScrema);

	const methods = useForm<ContactFormData>({
		resolver,
		defaultValues: defaultValue || defaultValues,
		mode: "onTouched",
	});

	const onSubmit = async (contactData: ContactFormData) => {
		if (isLoading) return;
		if (defaultValue) {
			updateContact(contactData, defaultValue.id);
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
