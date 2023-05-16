import styled, { css } from "styled-components";

export const CustomFieldset = styled.fieldset<{ $hasError: boolean }>`
	${({ theme, $hasError }) => css`
		border-radius: 5px;
		border-width: 1px;
		border-color: ${$hasError
			? theme.colors.red.default
			: theme.colors.gray.default};
		background-color: ${$hasError
			? theme.colors.red.light
			: theme.colors.white};

		&:focus-within {
			border-color: ${$hasError
				? theme.colors.red.default
				: theme.colors.black};
			box-shadow: 0 0 5px 1px ${theme.colors.gray.shadow};
		}
	`}
`;
