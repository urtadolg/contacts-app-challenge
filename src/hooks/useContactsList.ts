import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ContactsContext } from "~/store";
import SearchBarContext from "~/store/searchbox-context";
import { handleCategoriesList } from "~/utils/searchbox";

const useContactsList = () => {
	const { searchTerm } = useContext(SearchBarContext);
	const {
		isLoading,
		contactsList: unfilteredContactsList,
		getContactsList,
	} = useContext(ContactsContext);

	const navigate = useNavigate();

	const categoriesList = useMemo(() => {
		return handleCategoriesList(unfilteredContactsList, searchTerm);
	}, [unfilteredContactsList, searchTerm]);

	const contactsList = useMemo(() => {
		if (searchTerm.length === 0) {
			return unfilteredContactsList;
		}

		if (categoriesList.length === 1) {
			return {
				[categoriesList[0]]: unfilteredContactsList[categoriesList[0]].filter(
					(contact) =>
						contact.name.toLowerCase().includes(searchTerm.toLowerCase())
				),
			};
		}

		return unfilteredContactsList;
	}, [unfilteredContactsList, categoriesList, searchTerm]);

	useEffect(() => {
		getContactsList();
	}, []);

	const handleContactSelect = (contactId: string) => {
		navigate(`/contacts/${contactId}`);
	};

	return {
		navigate,
		categoriesList,
		contactsList,
		handleContactSelect,
		isLoading,
	};
};

export default useContactsList;
