import { Button, LoadSpinner } from "~/components";
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
			<SearchBar />
			<Button onClick={() => navigate("./new")} icon="Plus">
				Novo Contato
			</Button>
			{isLoading || !contactsList ? (
				<LoadSpinner />
			) : (
				<CategoryList
					categoriesList={categoriesList}
					contactsList={contactsList}
					handleContactSelect={handleContactSelect}
				/>
			)}
			{categoriesList.length === 0 && !isLoading && <h1>Lista vazia...</h1>}
		</ContactsListPageContainer>
	);
};

export default ContactsList;
