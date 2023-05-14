export interface ModalProps {
	title: string;
	description: string;
	isOpen: boolean;
	isLoading?: boolean;
	onConfirmHandler: () => void;
	onCancelHandler: () => void;
}
