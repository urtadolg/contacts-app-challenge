import {
	InputErrorMessage,
	Input,
	Label,
	Button,
	CustomIcon,
} from "~/components";
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
						>
							<CustomIcon name="Trash" size={20} />
						</Button>
					</PhoneInputContainer>
				))}
			</ul>
			<Button onClick={addNewInputField}>
				<CustomIcon name="Plus" size={20} />
				Adicionar Telefone
			</Button>
		</>
	);
};

export default DynamicPhoneForm;
