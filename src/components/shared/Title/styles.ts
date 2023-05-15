import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.gray[700]};
		font-weight: 700;
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 30px;
	`}
`;
