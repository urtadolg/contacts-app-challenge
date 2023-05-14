import styled, { css } from "styled-components";

export const DetailsContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 25px;
	width: 100%;
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;

	p {
		padding: 0px 10px;
	}
`;

export const SectionTitle = styled.h3`
	${({ theme }) => css`
		font-size: 1rem;
		background-color: ${theme.colors.gray.default};
		padding: 8px 10px;
		margin-bottom: 20px;
	`}
`;

export const ListContainer = styled.ul`
	${({ theme }) => css``}
`;

export const ListItem = styled.li`
	${({ theme }) => css`
		padding: 16px 0px;
		border-bottom: ${theme.colors.gray.default} solid 1px;

		&:first-child {
			padding-top: 0px;
		}

		&:last-child {
			border-bottom-color: transparent;
		}
	`}
`;
