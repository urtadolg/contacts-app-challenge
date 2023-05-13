import styled from "styled-components";
import { Button, CustomIcon, LoadSpinner } from "~/components";
import { useContactsList } from "~/hooks";

const ContactsList = () => {
	const {
		categoriesList,
		contactsList,
		handleContactSelect,
		isLoading,
		navigate,
	} = useContactsList();

	return (
		<>
			<Button onClick={() => navigate("./new")}>
				<CustomIcon name="Plus" />
				Novo Contato
			</Button>
			{isLoading || !contactsList ? (
				<LoadSpinner />
			) : (
				<ContactsListContainer>
					{categoriesList.map((category) => {
						return (
							<li key={category}>
								<p>{category}</p>
								<ul>
									{contactsList[`${category}`].map((contact) => {
										return (
											<li
												key={contact.id}
												onClick={handleContactSelect}
												className="item-container"
											>
												<p>{contact.name}</p>
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ContactsListContainer>
			)}
		</>
	);
};

export default ContactsList;

const ContactsListContainer = styled.ul`
	height: 100%;
	width: 100%;
	overflow: auto;
	margin-top: 30px;
`;
