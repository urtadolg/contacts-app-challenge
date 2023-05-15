import styled, { css } from "styled-components";

export const PhoneInputContainer = styled.li`
	${({ theme }) => css`
		display: flex;
		gap: 10px;
		margin-bottom: 10px;

		div {
			width: 100%;
		}

		button {
			height: 42px;

			p {
				display: none;
				white-space: nowrap;

				@media ${theme.device.laptop} {
					display: block;
				}
			}
		}
	`}
`;
