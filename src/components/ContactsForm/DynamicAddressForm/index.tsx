import { Label, Button, CustomIcon, InputWithFieldset } from "~/components";
import { useDynamicForm } from "~/hooks";
import { AddressFormContainer } from "./styles";

const DynamicAddressForm = () => {
	const {
		fields,
		register,
		isRemoveFieldButtonDisabled,
		removeInputField,
		addNewInputField,
	} = useDynamicForm("address");

	return (
		<>
			<Label label="Endereço(s)" />
			<ul>
				{fields.map((field, index) => (
					<AddressFormContainer key={field.id}>
						<Label label={`#${index + 1}`} />
						<InputWithFieldset
							legend="CEP"
							inputProps={{ ...register(`address.${index}.zipCode`) }}
						/>
						<div className="street-number-container">
							<InputWithFieldset
								legend="Rua"
								inputProps={{ ...register(`address.${index}.street`) }}
							/>
							<InputWithFieldset
								legend="Número"
								inputProps={{ ...register(`address.${index}.number`) }}
							/>
						</div>
						<InputWithFieldset
							legend="Bairro"
							inputProps={{ ...register(`address.${index}.neighborhood`) }}
						/>
						<div className="city-state-container">
							<InputWithFieldset
								legend="Cidade"
								inputProps={{ ...register(`address.${index}.city`) }}
							/>
							<InputWithFieldset
								legend="UF"
								inputProps={{ ...register(`address.${index}.state`) }}
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
