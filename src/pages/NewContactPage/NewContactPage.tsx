import styled from "styled-components";
import { ContactsForm, Title } from "~/components";

const NewContactPage = () => {
	return (
		<NewContactPageContainer>
			<Title>Criação</Title>
			<ContactsForm />
		</NewContactPageContainer>
	);
};

export default NewContactPage;

const NewContactPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 0 15px;
`;
