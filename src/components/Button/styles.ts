import styled, { css } from "styled-components";
import { ButtonVariant } from "./types";

export const CustomButton = styled.button<{ variant: ButtonVariant }>`
	${({ theme, variant }) => css`
		color: ${theme.buttonColors[variant].color};
		background-color: ${theme.buttonColors[variant].backgroundColor};
		padding: 10px;
		font-size: 1rem;
		font-weight: 500;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3px;

		&:hover {
			opacity: 0.9;
		}

		&:disabled {
			color: ${theme.colors.gray.dark};
			background-color: ${theme.colors.gray.default};
			cursor: not-allowed;
			opacity: unset;
		}
	`}
`;
