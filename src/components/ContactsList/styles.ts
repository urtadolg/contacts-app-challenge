import styled, { css } from "styled-components";

export const ListContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		flex: 1 0 100px;

		.add-contact-btn {
			width: fit-content;
			margin-bottom: 30px;
			align-self: flex-end;

			@media ${theme.device.laptop} {
				align-self: flex-start;
			}
		}

		@media ${theme.device.desktop} {
			max-width: 1040px;
		}
	`}
`;
