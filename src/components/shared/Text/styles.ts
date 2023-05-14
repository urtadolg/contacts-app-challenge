import styled, { css } from "styled-components";

export const StyledText = styled.p`
	${({ theme }) => css`
		font-size: 1rem;
		color: ${theme.colors.gray[700]};
	`}
`;
