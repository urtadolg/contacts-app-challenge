import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ContactsContext } from "~/store";
import { getCategoriesList } from "~/utils";

const useContactsList = () => {
	const navigate = useNavigate();

	const { isLoading, contactsList, getContactsList } =
		useContext(ContactsContext);

	const categoriesList = useMemo(() => {
		return getCategoriesList(contactsList);
	}, [contactsList]);

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
