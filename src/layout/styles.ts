import styled, { css } from "styled-components";

export const AppWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px 15px 20px 15px;
		min-height: 100vh;

		@media ${theme.device.tablet} {
			padding: 70px 70px;
		}

		@media ${theme.device.laptop} {
			background-color: ${theme.colors.gray.default};
		}

		@media ${theme.device.desktop} {
			padding: 70px 80px;
		}
	`}
`;

export const AppContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 750px;
		flex: 1;
		border-radius: 10px;
		position: relative;

		@media ${theme.device.laptop} {
			background-color: ${theme.colors.gray.light};
			padding: 40px 50px;
			box-shadow: 0 0 5px 1px ${theme.colors.gray.shadow};
		}

		@media ${theme.device.desktop} {
			padding: 60px 80px 40px;
			max-width: 1200px;
		}
	`}
`;
