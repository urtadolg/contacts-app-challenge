import ContactsDataList from "../ContactsDataList";
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
						<CategoryTitle className="category-title">{category}</CategoryTitle>
						<ContactsDataList
							category={category}
							contactsList={contactsList}
							handleContactSelect={handleContactSelect}
						/>
					</CategoryListItemContainer>
				);
			})}
		</ContactsListContainer>
	);
};

export default CategoryList;
