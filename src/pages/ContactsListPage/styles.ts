import styled from "styled-components";

export const ContactsListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 15px;
	height: 100vh;

	h1 {
		text-align: center;
	}

	.item-container {
		padding: 10px;
		margin: 10px 0;
		background-color: #dbdbdb;
		cursor: pointer;

		&:hover {
			background-color: gray;
		}
	}
`;
