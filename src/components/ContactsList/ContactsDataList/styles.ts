import styled, { css } from "styled-components";

export const ContactsDataListContainer = styled.ul`
	${({ theme }) => css`
		.item-container {
			padding: 13px 33px;
			border: solid 1px ${theme.colors.gray.default};
			border-bottom-color: transparent;
			cursor: pointer;
			display: flex;
			justify-content: space-between;

			.controllers-btn {
				display: flex;
				justify-content: flex-end;
				gap: 5px;
				width: fit-content;
				margin-left: 20px;
				display: none;

				@media ${theme.device.laptop} {
					display: flex;
				}
			}

			.name-email {
				display: flex;
				flex-direction: column;
				gap: 5px;
				width: 100%;

				@media ${theme.device.laptop} {
					width: 50%;
				}

				.email-info {
					display: none;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 0.9rem;
					color: ${theme.colors.gray.dark};

					@media ${theme.device.tablet} {
						display: block;
					}
				}
			}

			.phone-container,
			.address-container {
				display: none;
				flex-direction: column;
				justify-content: center;
				gap: 5px;
				width: 50%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

				p {
					font-size: 0.9rem !important;
					color: ${theme.colors.gray.dark};
				}

				@media ${theme.device.desktop} {
					display: flex;
				}
			}

			&:last-child {
				border-bottom-color: ${theme.colors.gray.default};
			}

			&:hover {
				background-color: ${theme.colors.gray.light};

				@media ${theme.device.laptop} {
					background-color: ${theme.colors.white};
				}
			}
		}
	`}
`;
