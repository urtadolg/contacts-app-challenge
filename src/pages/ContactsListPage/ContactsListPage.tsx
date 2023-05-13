import { ContactsList, Title } from "~/components";
import { ContactsListContainer } from "./styles";

const ContactsListPage = () => {
	return (
		<ContactsListContainer>
			<Title>Lista de Contatos</Title>
			<ContactsList />
		</ContactsListContainer>
	);
};

export default ContactsListPage;
