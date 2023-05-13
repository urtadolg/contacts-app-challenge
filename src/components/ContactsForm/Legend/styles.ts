import styled, { css } from "styled-components";

export const CustomLegend = styled.legend<{ $hasError: boolean }>`
	${({ theme, $hasError }) => css`
		color: ${$hasError ? theme.colors.red.default : theme.colors.black};
		margin-left: 10px;
		font-size: 0.85rem;
		font-weight: 600;
	`}
`;
