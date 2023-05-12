import styled, { css } from "styled-components";

export const StyledInput = styled.input`
	${({ theme }) => css`
		border: ${theme.colors.gray.dark} solid 1px;
		border-radius: 5px;
		font-size: 1rem;
		outline: none;
		padding: 10px 20px;
		color: ${theme.colors.gray[700]};
		width: 100%;
	`}
`;
