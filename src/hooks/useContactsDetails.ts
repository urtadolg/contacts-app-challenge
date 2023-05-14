import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactsContext } from "~/store";

const useContactDetailsPage = () => {
	const [isConfirmModalOpened, setIsConfirmModalOpened] = useState(false);

	const { isLoading, getContactDetails, contactDetails, deleteContact } =
		useContext(ContactsContext);

	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getContactDetails(String(id));
	}, []);

	const onEditClickHandler = () => {
		navigate(`/contacts/edit/${id}`, {
			state: { contactDetails: contactDetails },
		});
	};

	const onDeleteClickHandler = () => {
		setIsConfirmModalOpened(true);
	};

	const onConfirmDeleteHandler = async () => {
		if (isLoading) return;
		await deleteContact(String(id));
		setIsConfirmModalOpened(false);
	};

	const onCancelDeleteHandler = () => {
		setIsConfirmModalOpened(false);
	};

	const onBackClickHandler = () => {
		navigate("/contacts");
	};

	return {
		contactDetails,
		isLoading,
		onEditClickHandler,
		onDeleteClickHandler,
		onConfirmDeleteHandler,
		onCancelDeleteHandler,
		onBackClickHandler,
		isConfirmModalOpened,
	};
};

export default useContactDetailsPage;
