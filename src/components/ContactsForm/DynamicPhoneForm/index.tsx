import { Input, Label, Button, CustomIcon } from "~/components";
import { useDynamicForm } from "~/hooks";
import { CustomErrorMessage, PhoneInputContainer } from "./styles";

const DynamicPhoneForm = () => {
	const {
		fields,
		register,
		isRemoveFieldButtonDisabled,
		removeInputField,
		addNewInputField,
	} = useDynamicForm("phone");

	return (
		<>
			<Label label="Telefone(s)" />
			<ul>
				{fields.map((field, index) => (
					<PhoneInputContainer key={field.id}>
						<Input {...register(`phone.${index}.number`)} />
						<Button
							variant="Danger"
							disabled={isRemoveFieldButtonDisabled}
							onClick={removeInputField.bind(this, index)}
						>
							<CustomIcon name="Trash" size={20} />
						</Button>
					</PhoneInputContainer>
				))}
			</ul>
			<CustomErrorMessage>Digite um telefone válido.</CustomErrorMessage>
			<Button onClick={addNewInputField}>
				<CustomIcon name="Plus" size={20} />
				Adicionar Telefone
			</Button>
		</>
	);
};

export default DynamicPhoneForm;
