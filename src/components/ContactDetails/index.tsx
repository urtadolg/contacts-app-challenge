import { LoadSpinner, ConfirmModal, Title } from "~/components";
import { ContactDetailsContainer } from "./styles";
import { useContactsDetails } from "~/hooks";
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
	} = useContactsDetails();

	return (
		<ContactDetailsContainer>
			<Title>Detalhes do Contato</Title>
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
