import { useLocation } from "react-router-dom";
import { ContactsForm, Title } from "~/components";
import { IContactData } from "~/types";

const ContactEditPage = () => {
	const { contactDetails } = useLocation().state as {
		contactDetails: IContactData;
	};

	return (
		<div style={{ padding: "50px 15px" }}>
			<Title>Editar contato</Title>
			<ContactsForm defaultValue={contactDetails} />
		</div>
	);
};

export default ContactEditPage;
