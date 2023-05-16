import styled, { css } from "styled-components";
import { SearchBarContainerParams } from "./types";

export const SearchBarWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
	`}
`;

export const SearchBarContainer = styled.div<SearchBarContainerParams>`
	${({ theme, $isSearchSuggestionsOpened }) => css`
		width: 100%;
		border: solid 1px ${theme.colors.gray.default};
		border-radius: ${$isSearchSuggestionsOpened ? "10px 10px 0px 0px" : "10px"};
		display: flex;
		align-items: center;
		color: ${theme.colors.gray.dark};
		margin-bottom: 20px;
		padding: 13px 22px;

		&:hover,
		&:focus-within {
			box-shadow: 0 0 5px 1px ${theme.colors.gray.shadow};
		}

		input {
			padding: 0px;
			border: none;

			&:focus-within {
				box-shadow: none;
			}
		}

		@media ${theme.device.tablet} {
			background-color: ${theme.colors.white};
		}

		@media ${theme.device.desktop} {
			width: 50%;
			align-self: center;
		}
	`}
`;

export const SearchSuggestionsContainer = styled.div`
	${({ theme }) => css`
		position: absolute;
		top: 47px;
		width: 100%;
		background-color: transparent;

		ul {
			box-shadow: 0 0 5px 1px #7e7e7e44;
			border-radius: 0px 0px 10px 10px;
			overflow: hidden;
			border: solid 1px ${theme.colors.gray.default};
			background-color: ${theme.colors.white};

			li {
				color: ${theme.colors.gray[700]};
				padding: 13px 15px;
				cursor: pointer;
				display: flex;
				gap: 15px;

				&:hover {
					background-color: ${theme.colors.gray.default};
				}
			}
		}

		@media ${theme.device.desktop} {
			width: 50%;
			margin: 0px auto;
		}
	`}
`;
