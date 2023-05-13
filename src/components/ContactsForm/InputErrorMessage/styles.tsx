import styled, { css } from "styled-components";

export const StyledErrorMessage = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.red.default};
		margin-top: 5px;
		font-size: 0.9rem;
	`}
`;
