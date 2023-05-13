import styled, { css } from "styled-components";

export const StyledLabel = styled.label<{ $hasError: boolean }>`
	${({ theme, $hasError }) => css`
		color: ${$hasError ? theme.colors.red.default : theme.colors.black};
		font-size: 1rem;
		font-weight: 700;
		margin-bottom: 8px;
	`}
`;
