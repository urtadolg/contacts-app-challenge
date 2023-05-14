import styled, { css } from "styled-components";
import { Title, ContactDetails } from "~/components";

const ContactDetailsPage = () => {
	return (
		<DetailsPageContainer>
			<Title>Detalhes</Title>
			<ContactDetails />
		</DetailsPageContainer>
	);
};

export default ContactDetailsPage;

const DetailsPageContainer = styled.div`
	${({ theme }) => css`
		padding: 30px 15px;
	`}
`;
