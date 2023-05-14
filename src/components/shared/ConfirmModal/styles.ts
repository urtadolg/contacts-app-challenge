import styled, { css } from "styled-components";

export const ModalControllersContainer = styled.div`
	display: flex;
	gap: 5px;
	width: 100%;

	button {
		width: 100%;
	}
`;

export const ModalTitle = styled.h2`
	${({ theme }) => css`
		font-size: 1rem;
		text-align: center;
		background-color: ${theme.colors.gray.dark};
		color: ${theme.colors.white};
		margin: -20px -20px 0px -20px;
		padding: 15px 0;
		font-weight: 600;
	`}
`;
