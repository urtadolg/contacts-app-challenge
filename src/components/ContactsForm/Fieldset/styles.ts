import styled, { css } from "styled-components";

export const CustomFieldset = styled.fieldset<{ $hasError: boolean }>`
	${({ theme, $hasError }) => css`
		border-radius: 5px;
		border-width: 1px;
		border-color: ${$hasError
			? theme.colors.red.default
			: theme.colors.gray.dark};
		background-color: ${$hasError
			? theme.colors.red.light
			: theme.colors.white};

		&:focus-within {
			border-color: ${$hasError
				? theme.colors.red.default
				: theme.colors.black};
		}

		input {
			border-color: transparent !important;
			padding: 5px 20px 10px 20px;
			width: 100%;
		}
	`}
`;
