import { Button, LoadSpinner, Text } from "~/components";
import { useContactsList } from "~/hooks";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import { ContactsListPageContainer } from "./styles";

const ContactsList = () => {
	const {
		categoriesList,
		contactsList,
		handleContactSelect,
		isLoading,
		navigate,
	} = useContactsList();

	return (
		<ContactsListPageContainer>
			<SearchBar contactsList={contactsList} />
			<Button onClick={() => navigate("./new")} icon="Plus">
				Novo Contato
			</Button>
			{isLoading || !contactsList ? (
				<LoadSpinner />
			) : categoriesList.length === 0 ? (
				<Text>Nenhum contato encontrado :(</Text>
			) : Object.values(contactsList)[0]?.length > 0 ? (
				<CategoryList
					categoriesList={categoriesList}
					contactsList={contactsList}
					handleContactSelect={handleContactSelect}
				/>
			) : (
				<Text>Nenhum contato encontrado :(</Text>
			)}
		</ContactsListPageContainer>
	);
};

export default ContactsList;
