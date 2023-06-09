import { Dispatch, SetStateAction } from "react";
import {
	Address,
	ContactFormData,
	IContactData,
	Phone,
	SortedContactsList,
} from "~/types";

export const parseFormData = (
	data: ContactFormData,
	id: string
): IContactData => {
	return {
		...data,
		id,
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

export const updateLocalContactDetailsState = (
	updatedContact: IContactData,
	setContactsList: Dispatch<SetStateAction<SortedContactsList>>
) => {
	setContactsList((state) => {
		const filteredCategoryList = state[`${updatedContact.category}`].filter(
			(item) => item.id === updatedContact.id
		);

		return {
			...state,
			[`${updatedContact.category}`]: [...filteredCategoryList, updatedContact],
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

export const formatAddressText = (address: Address) => {
	return `${address.street}, ${address.number} - ${address.neighborhood} - ${address.city} / ${address.state}`;
};

export const phonesToDisplay = (phoneNumbersList: Phone[]) => {
	if (phoneNumbersList.length <= 2) return phoneNumbersList;
	return [
		phoneNumbersList[0],
		{ number: `+ ${phoneNumbersList.length - 1} telefone(s)...` },
	];
};

export const addressToDisplay = (addressList: Address[]) => {
	if (addressList.length <= 2) return addressList;
	return [
		addressList[0],
		{ city: `+ ${addressList.length - 1} endereços(s)...` },
	];
};
