import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
`;

export const ControllerButtonsContainer = styled.div`
	display: flex;
	gap: 5px;

	button {
		width: 100%;
	}
`;
