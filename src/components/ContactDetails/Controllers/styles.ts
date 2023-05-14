import styled, { css } from "styled-components";

export const ControllersContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		gap: 5px;
		margin-bottom: 30px;

		button {
			width: 100%;
		}
	`}
`;
