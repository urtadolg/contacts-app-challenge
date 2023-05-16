import { useLocation } from "react-router-dom";
import { ContactsForm } from "~/components";
import { IContactData } from "~/types";

const ContactEditPage = () => {
	const { contactDetails } = useLocation().state as {
		contactDetails: IContactData;
	};

	return <ContactsForm initialValue={contactDetails} />;
};

export default ContactEditPage;
