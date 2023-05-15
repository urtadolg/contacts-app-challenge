import { Button } from "~/components";
import { ControllersContainer } from "./styles";
import { ControllersProps } from "./types";

const Controllers = ({
	onBackClickHandler,
	onEditClickHandler,
	onDeleteClickHandler,
}: ControllersProps) => {
	return (
		<ControllersContainer>
			<Button icon="Back" variant="Success" onClick={onBackClickHandler}>
				Voltar
			</Button>
			<Button className="edit-btn" icon="Edit" onClick={onEditClickHandler}>
				Editar
			</Button>
			<Button icon="Trash" variant="Danger" onClick={onDeleteClickHandler}>
				Excluir
			</Button>
		</ControllersContainer>
	);
};

export default Controllers;
