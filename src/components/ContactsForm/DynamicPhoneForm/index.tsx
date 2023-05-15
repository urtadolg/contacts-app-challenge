import { InputErrorMessage, Input, Label, Button } from "~/components";
import { useDynamicForm } from "~/hooks";
import { addCellphoneMask } from "~/utils/masks";
import { PhoneInputContainer } from "./styles";
import { DynamicPhoneFormProps } from "./types";

const DynamicPhoneForm = ({ errors }: DynamicPhoneFormProps) => {
	const {
		fields,
		register,
		isRemoveFieldButtonDisabled,
		removeInputField,
		addNewInputField,
	} = useDynamicForm("phone");

	return (
		<>
			<Label hasError={Boolean(errors)} label="Telefone(s)" />
			<ul>
				{fields.map((field, index) => (
					<PhoneInputContainer key={field.id}>
						<div>
							<Input
								placeholder="(11) 98765-4321"
								hasError={Boolean(errors && errors[index]?.number?.message)}
								maxLength={15}
								onKeyUp={addCellphoneMask}
								{...register(`phone.${index}.number`)}
							/>
							{errors && errors[index]?.number && (
								<InputErrorMessage>
									{errors[index]?.number?.message}
								</InputErrorMessage>
							)}
						</div>
						<Button
							variant="Danger"
							disabled={isRemoveFieldButtonDisabled}
							onClick={removeInputField.bind(this, index)}
							icon="Trash"
						>
							<p>Excluir Telefone</p>
						</Button>
					</PhoneInputContainer>
				))}
			</ul>
			<Button className="add-phone-btn" onClick={addNewInputField} icon="Plus">
				Adicionar Telefone
			</Button>
		</>
	);
};

export default DynamicPhoneForm;
