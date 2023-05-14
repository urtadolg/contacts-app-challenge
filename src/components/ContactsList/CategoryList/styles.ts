import styled, { css } from "styled-components";

export const ContactsListContainer = styled.ul`
	height: 100%;
	width: 100%;
	overflow: auto;
`;

export const CategoryListItemContainer = styled.li`
	${({ theme }) => css`
		.item-container {
			padding: 13px 33px;
			border: solid 1px ${theme.colors.gray.default};
			border-bottom-color: transparent;
			cursor: pointer;

			&:last-child {
				border-bottom-color: ${theme.colors.gray.default};
			}

			&:hover {
				background-color: ${theme.colors.gray.light};
			}
		}

		h3 {
			padding: 6px 23px;
		}

		&:first-child {
			h3 {
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
	`}
`;
