import styled, { css } from "styled-components";

export const ContactsListContainer = styled.ul`
	${({ theme }) => css`
		flex: 1 0 200px;
		width: 100%;
		overflow: auto;
		scrollbar-color: ${theme.colors.blue.default} ${theme.colors.gray.default};
		scrollbar-width: thin;

		&::-webkit-scrollbar-thumb {
			background-color: ${theme.colors.blue.default};
			border-radius: 20px;
		}

		&::-webkit-scrollbar {
			width: 10px;
			height: 12px;
		}

		&::-webkit-scrollbar-track {
			background-color: ${theme.colors.gray.default};
			border-radius: 20px;
		}
	`}
`;

export const CategoryListItemContainer = styled.li`
	${({ theme }) => css`
		&:first-child {
			.category-title {
				border-radius: 6px 6px 0 0;
			}
		}

		&:last-child {
			.item-container {
				&:last-child {
					border-radius: 0 0 6px 6px;
				}
			}
		}
	`}
`;

export const CategoryTitle = styled.h3`
	${({ theme }) => css`
		font-size: 1.3rem;
		font-weight: 500;
		color: ${theme.colors.gray.dark};
		background-color: ${theme.colors.gray.default};
		padding: 6px 23px;

		@media ${theme.device.desktop} {
			padding: 10px 35px;
			font-size: 1.9rem;
		}
	`}
`;
