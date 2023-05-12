import styled from "styled-components";

const ContactsListPage = () => {
	return (
		<ContactsListContainer>
			<h1>Contatos</h1>
		</ContactsListContainer>
	);
};

export default ContactsListPage;

const ContactsListContainer = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		text-align: center;
	}
`;
