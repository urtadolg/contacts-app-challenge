import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-weight: 400;
		font-size: 20px;
		text-align: center;
		margin: 30px 0;
	`}
`;
