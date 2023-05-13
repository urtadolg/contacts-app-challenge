import styled, { css } from "styled-components";

export const AddressFormContainer = styled.li`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 13px;
		margin-bottom: 25px;
		padding-bottom: 25px;
		border-bottom: solid 3px ${theme.colors.gray.default};

		.street-number-container,
		.city-state-container {
			display: flex;
			gap: 5px;

			div:last-child {
				width: 150px;
			}
		}
	`}
`;
