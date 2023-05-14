import { LoadSpinner, ConfirmModal } from "~/components";
import { ContactDetailsContainer } from "./styles";
import useContactDetailsPage from "~/hooks/useContactsDetails";
import Controllers from "./Controllers";
import Details from "./Details";

const ContactDetails = () => {
	const {
		contactDetails,
		isLoading,
		onEditClickHandler,
		onDeleteClickHandler,
		onConfirmDeleteHandler,
		onCancelDeleteHandler,
		onBackClickHandler,
		isConfirmModalOpened,
	} = useContactDetailsPage();

	return (
		<ContactDetailsContainer>
			<Controllers
				onEditClickHandler={onEditClickHandler}
				onDeleteClickHandler={onDeleteClickHandler}
				onBackClickHandler={onBackClickHandler}
			/>
			{isLoading || !contactDetails ? (
				<LoadSpinner />
			) : (
				<Details contactDetails={contactDetails} />
			)}
			<ConfirmModal
				title="Tem certeza que deseja excluir?"
				description="Essa ação é irreversível"
				isOpen={isConfirmModalOpened}
				onCancelHandler={onCancelDeleteHandler}
				onConfirmHandler={onConfirmDeleteHandler}
				isLoading={isLoading}
			/>
		</ContactDetailsContainer>
	);
};

export default ContactDetails;
