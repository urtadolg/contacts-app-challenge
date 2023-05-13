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
		if (categoriesList.length === 0) {
			getContactsList();
		}
	}, [categoriesList, getContactsList]);

	const handleContactSelect = () => {
		navigate("/contacts/edit/1");
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
