import Modal from "react-modal";
import { ModalProps } from "./types";
import { Button, Text } from "~/components";
import { ModalControllersContainer, ModalTitle } from "./styles";

const ConfirmModal = ({
	title,
	description,
	isOpen,
	isLoading = false,
	onConfirmHandler,
	onCancelHandler,
}: ModalProps) => {
	Modal.setAppElement("#root");

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCancelHandler}
			contentLabel="Confirmar Exclusão"
			style={{
				content: {
					top: "50%",
					left: "50%",
					bottom: "auto",
					marginRight: "-50%",
					transform: "translate(-50%, -50%)",
					display: "flex",
					flexDirection: "column",
					gap: "20px",
					maxWidth: "500px",
				},
			}}
		>
			<ModalTitle>{title}</ModalTitle>
			<Text>{description}</Text>
			<ModalControllersContainer>
				<Button icon="Cancel" variant="Danger" onClick={onCancelHandler}>
					Cancelar
				</Button>
				<Button
					icon="Check"
					variant="Success"
					onClick={onConfirmHandler}
					isLoading={isLoading}
				>
					Confirmar
				</Button>
			</ModalControllersContainer>
		</Modal>
	);
};

export default ConfirmModal;
