import styled, { css } from "styled-components";

export const Form = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 25px;
		width: 100%;
		max-width: 650px;

		.add-phone-btn,
		.add-address-btn,
		.remove-address-btn {
			@media ${theme.device.tablet} {
				width: fit-content;
			}
		}
	`}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
`;

export const ControllerButtonsContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: 5px;

		button {
			width: 100%;
		}

		@media ${theme.device.laptop} {
			align-self: flex-end;

			button {
				width: 150px;
			}
		}
	`}
`;
