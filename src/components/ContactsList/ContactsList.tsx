import { Button, LoadSpinner, Text, Title } from "~/components";
import { useContactsList } from "~/hooks";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import { ListContainer } from "./styles";

const ContactsList = () => {
	const {
		categoriesList,
		contactsList,
		handleContactSelect,
		isLoading,
		navigate,
	} = useContactsList();

	return (
		<ListContainer>
			<Title>Lista de Contatos</Title>
			<SearchBar contactsList={contactsList} />
			<Button
				className="add-contact-btn"
				onClick={() => navigate("./new")}
				icon="Plus"
			>
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
		</ListContainer>
	);
};

export default ContactsList;
