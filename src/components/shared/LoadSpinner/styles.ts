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
	${({ theme, $size, $dark }) => css`
		border: transparent solid ${$size < 30 ? "2px" : "5px"};
		border-color: transparent
			${$dark ? theme.colors.white : theme.colors.blue.default};
		border-radius: 50%;
		width: ${$size}px;
		height: ${$size}px;
		animation: ${spinAnimation} 700ms linear infinite;
	`}
`;
