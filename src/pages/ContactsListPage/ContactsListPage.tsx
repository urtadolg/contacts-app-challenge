import { ContactsList, Title } from "~/components";
import { SearchBoxProvider } from "~/store";
import { ContactsListContainer } from "./styles";

const ContactsListPage = () => {
	return (
		<SearchBoxProvider>
			<ContactsListContainer>
				<Title>Lista de Contatos</Title>
				<ContactsList />
			</ContactsListContainer>
		</SearchBoxProvider>
	);
};

export default ContactsListPage;
