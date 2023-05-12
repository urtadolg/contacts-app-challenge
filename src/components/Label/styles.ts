import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-size: 1rem;
		font-weight: 700;
		margin-bottom: 8px;
	`}
`;
