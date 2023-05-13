import { Label, Button, CustomIcon, InputWithFieldset } from "~/components";
import { useDynamicForm } from "~/hooks";
import { addZipCodeMask } from "~/utils/masks";
import { AddressFormContainer } from "./styles";
import { DynamicAddressFormProps } from "./types";

const DynamicAddressForm = ({ errors }: DynamicAddressFormProps) => {
	const {
		fields,
		register,
		isRemoveFieldButtonDisabled,
		removeInputField,
		addNewInputField,
	} = useDynamicForm("address");

	return (
		<>
			<Label hasError={Boolean(errors)} label="Endereço(s)" />
			<ul>
				{fields.map((field, index) => (
					<AddressFormContainer key={field.id}>
						<Label
							hasError={Boolean(errors && errors[index])}
							label={`#${index + 1}`}
						/>
						<InputWithFieldset
							legend="CEP"
							inputProps={{
								placeholder: "12345-678",
								maxLength: 9,
								onKeyUp: addZipCodeMask,
								...register(`address.${index}.zipCode`),
							}}
							errorMessage={errors && errors[index]?.zipCode?.message}
						/>
						<div className="street-number-container">
							<InputWithFieldset
								legend="Rua"
								inputProps={{
									placeholder: "Nome da Rua",
									...register(`address.${index}.street`),
								}}
								errorMessage={errors && errors[index]?.street?.message}
							/>
							<InputWithFieldset
								legend="Número"
								inputProps={{
									placeholder: "12",
									...register(`address.${index}.number`),
								}}
								errorMessage={errors && errors[index]?.number?.message}
							/>
						</div>
						<InputWithFieldset
							legend="Bairro"
							inputProps={{
								placeholder: "Nome do Bairro",
								...register(`address.${index}.neighborhood`),
							}}
							errorMessage={errors && errors[index]?.neighborhood?.message}
						/>
						<div className="city-state-container">
							<InputWithFieldset
								legend="Cidade"
								inputProps={{
									placeholder: "Nome da Cidade",
									...register(`address.${index}.city`),
								}}
								errorMessage={errors && errors[index]?.city?.message}
							/>
							<InputWithFieldset
								legend="UF"
								inputProps={{
									placeholder: "SP",
									...register(`address.${index}.state`),
								}}
								errorMessage={errors && errors[index]?.state?.message}
							/>
						</div>
						<Button
							variant="Danger"
							disabled={isRemoveFieldButtonDisabled}
							onClick={removeInputField.bind(this, index)}
						>
							<CustomIcon name="Trash" size={20} />
							Excluir Endereço
						</Button>
					</AddressFormContainer>
				))}
			</ul>
			<Button onClick={addNewInputField}>
				<CustomIcon name="Plus" size={20} />
				Adicionar Endereço
			</Button>
		</>
	);
};

export default DynamicAddressForm;
