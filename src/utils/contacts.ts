import { Dispatch, SetStateAction } from "react";
import { ContactFormData, IContactData, SortedContactsList } from "~/types";

export const parseFormData = (data: ContactFormData): IContactData => {
	return {
		...data,
		id: Math.random(),
		category: data.name.toUpperCase().charAt(0),
	};
};

export const updateLocalContactsListState = (
	newContact: IContactData,
	setContactsList: Dispatch<SetStateAction<SortedContactsList>>
) => {
	setContactsList((state) => {
		return {
			...state,
			[`${newContact.category}`]: [
				...(state[`${newContact.category}`] || []),
				newContact,
			],
		};
	});
};

export const sortByNameInitials = (
	contactsList: IContactData[]
): SortedContactsList => {
	const sortedDataMap: SortedContactsList = {};

	contactsList.forEach((contact) => {
		const selectedCategoryList = sortedDataMap[`${contact.category}`] || [];

		selectedCategoryList.push(contact);

		sortedDataMap[`${contact.category}`] = selectedCategoryList;
	});

	return sortedDataMap;
};

export const getCategoriesList = (obj: SortedContactsList) => {
	const categoriesList: string[] = [];

	for (const key in obj) {
		categoriesList.push(key);
	}

	return categoriesList.sort();
};
