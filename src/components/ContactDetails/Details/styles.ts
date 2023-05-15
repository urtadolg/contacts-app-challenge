import styled, { css } from "styled-components";

export const DetailsContainer = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 25px;
		width: 100%;

		@media ${theme.device.desktop} {
			display: grid;
			grid-template-columns: 1fr 1.5fr;
		}
	`}
`;

export const SectionContainer = styled.li`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		max-width: 100%;
		border-radius: 5px;
		border: solid 1px ${theme.colors.gray.default};
	`}
`;

export const SectionTitle = styled.h3`
	${({ theme }) => css`
		font-size: 1rem;
		background-color: ${theme.colors.gray.default};
		color: ${theme.colors.gray[700]};
		padding: 15px 20px;
	`}
`;

export const DataContainer = styled.div`
	${({ theme }) => css`
		padding: 20px;
	`}
`;

export const ListItem = styled.li`
	${({ theme }) => css`
		padding: 20px;

		border-bottom: ${theme.colors.gray.default} solid 1px;

		&:last-child {
			border-bottom-color: transparent;
		}
	`}
`;
