import styled, { css } from "styled-components";

export const PhoneInputContainer = styled.li`
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
`;

export const CustomErrorMessage = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.red.default};
		margin-bottom: 15px;
	`}
`;
