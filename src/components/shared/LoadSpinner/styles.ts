import styled, { css, keyframes } from "styled-components";
import { CustomSpinnerProps } from "./types";

const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const CustomSpinner = styled.div<CustomSpinnerProps>`
	${({ theme, $size }) => css`
		border: transparent solid 5px;
		border-color: transparent ${theme.colors.blue.default};
		border-radius: 50%;
		width: ${$size}px;
		height: ${$size}px;
		animation: ${spinAnimation} 700ms linear infinite;
	`}
`;
