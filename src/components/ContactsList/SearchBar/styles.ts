import styled, { css } from "styled-components";

export const SearchBarContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		padding: 13px 22px;
		border: solid 1px ${theme.colors.gray.default};
		border-radius: 10px;
		display: flex;
		color: ${theme.colors.gray.dark};
		margin-bottom: 20px;

		input {
			padding: 0px;
			border: none;
		}
	`}
`;
