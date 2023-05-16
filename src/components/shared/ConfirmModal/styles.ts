import styled, { css } from "styled-components";

export const ModalControllersContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: 5px;
		width: 100%;

		button {
			width: 100%;

			@media ${theme.device.laptop} {
				width: fit-content;

				&:first-child {
					margin-left: auto;
				}
			}
		}
	`}
`;

export const ModalTitle = styled.h2`
	${({ theme }) => css`
		font-size: 1rem;
		text-align: center;
		background-color: ${theme.colors.gray.dark};
		color: ${theme.colors.white};
		margin: -20px -20px 0px -20px;
		padding: 15px 0;
		font-weight: 600;
	`}
`;

export const ContentContainer = styled.div`
	${({ theme }) => css`
		height: 50px;
		padding: 20px 0 50px 0;
	`}
`;
