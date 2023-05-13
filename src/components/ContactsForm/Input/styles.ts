import styled, { css } from "styled-components";

export const StyledInput = styled.input<{ $hasError: boolean }>`
	${({ theme, $hasError }) => css`
		border: ${$hasError ? theme.colors.red.default : theme.colors.gray.dark}
			solid 1px;
		border-radius: 5px;
		font-size: 1rem;
		outline: none;
		padding: 10px 20px;
		color: ${$hasError ? theme.colors.red.default : theme.colors.gray[700]};
		background-color: ${$hasError
			? theme.colors.red.light
			: theme.colors.white};
		width: 100%;

		&:focus-within {
			border-color: ${$hasError
				? theme.colors.red.default
				: theme.colors.black};
		}
	`}
`;
