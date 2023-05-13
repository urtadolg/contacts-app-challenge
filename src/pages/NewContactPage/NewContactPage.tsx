import { ContactsForm, Title } from "~/components";
import { NewContactPageContainer } from "./styles";

const NewContactPage = () => {
	return (
		<NewContactPageContainer>
			<Title>Criação</Title>
			<ContactsForm />
		</NewContactPageContainer>
	);
};

export default NewContactPage;
