import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.gray.dark};
		font-weight: 600;
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 30px;
		letter-spacing: 0.05rem;

		@media ${theme.device.desktop} {
			font-size: 1.8rem;
		}
	`}
`;
