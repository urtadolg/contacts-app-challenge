import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, CustomIcon } from "~/components";
import { IContactData } from "~/types";
import { addressToDisplay, phonesToDisplay } from "~/utils";
import { ContactsDataListContainer } from "./styles";
import { ContactsDataListProps } from "./types";

const ContactsDataList = ({
	contactsList,
	category,
	handleContactSelect,
}: ContactsDataListProps) => {
	const navigate = useNavigate();

	const handleEditContact = (
		contactDetails: IContactData,
		e: MouseEvent<HTMLButtonElement>
	) => {
		e.stopPropagation();
		navigate(`/contacts/edit/${contactDetails.id}`, {
			state: { contactDetails: contactDetails },
		});
	};

	return (
		<ContactsDataListContainer>
			{contactsList[`${category}`].map((contact) => {
				return (
					<li
						key={contact.id}
						onClick={handleContactSelect.bind(this, contact.id)}
						className="item-container"
					>
						<div className="name-email">
							<Text>{contact.name}</Text>
							<Text className="email-info">{contact.email}</Text>
						</div>
						<div className="phone-container">
							{phonesToDisplay(contact.phone).map((phone) => {
								return <Text key={phone.number}>{phone.number}</Text>;
							})}
						</div>
						<div className="address-container">
							{addressToDisplay(contact.address).map((address) => {
								return <Text key={address.city}>{address.city}</Text>;
							})}
						</div>
						<div className="controllers-btn">
							<Button variant="Success">
								<CustomIcon name="View" />
							</Button>
							<Button onClick={handleEditContact.bind(this, contact)}>
								<CustomIcon name="Edit" />
							</Button>
						</div>
					</li>
				);
			})}
		</ContactsDataListContainer>
	);
};

export default ContactsDataList;
