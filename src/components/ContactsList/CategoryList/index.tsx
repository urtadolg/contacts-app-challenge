import { Text } from "~/components";
import {
	CategoryListItemContainer,
	CategoryTitle,
	ContactsListContainer,
} from "./styles";
import { CategoryListProps } from "./types";

const CategoryList = ({
	categoriesList,
	contactsList,
	handleContactSelect,
}: CategoryListProps) => {
	return (
		<ContactsListContainer>
			{categoriesList.map((category) => {
				return (
					<CategoryListItemContainer key={category}>
						<CategoryTitle>{category}</CategoryTitle>
						<ul>
							{contactsList[`${category}`].map((contact) => {
								return (
									<li
										key={contact.id}
										onClick={handleContactSelect.bind(this, contact.id)}
										className="item-container"
									>
										<Text>{contact.name}</Text>
									</li>
								);
							})}
						</ul>
					</CategoryListItemContainer>
				);
			})}
		</ContactsListContainer>
	);
};

export default CategoryList;
