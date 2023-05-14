import styled, { css } from "styled-components";

export const ContactsListPageContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		button {
			width: fit-content;
			margin-bottom: 30px;
		}
	`}
`;
