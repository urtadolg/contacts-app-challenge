import { InputContainer, Form, ControllerButtonsContainer } from "./styles";
import {
	Button,
	InputWithLabel,
	DynamicPhoneForm,
	DynamicAddressForm,
	Title,
} from "~/components";
import { useContactsForm } from "~/hooks";
import { FormProvider } from "react-hook-form";
import { PhoneErrorsType } from "./DynamicPhoneForm/types";
import { AddressErrorsType } from "./DynamicAddressForm/types";
import { ContactsFormProps } from "./types";

const ContactsForm = ({ defaultValue }: ContactsFormProps) => {
	const { methods, onSubmit, onCancel, isLoading } =
		useContactsForm(defaultValue);

	const { errors } = methods.formState;

	return (
		<FormProvider {...methods}>
			<Title>{defaultValue ? "Editar contato" : "Criar novo contato"}</Title>
			<Form onSubmit={methods.handleSubmit(onSubmit)}>
				<InputContainer>
					<InputWithLabel
						id="name"
						label="Nome"
						inputProps={{
							placeholder: "Nome Sobrenome",
							...methods.register("name"),
						}}
						errorMessage={errors.name}
					/>
				</InputContainer>
				<InputContainer>
					<InputWithLabel
						id="email"
						label="Email"
						inputProps={{
							placeholder: "nome.sobrenome@gmail.com",
							...methods.register("email"),
						}}
						errorMessage={errors.email}
					/>
				</InputContainer>
				<InputContainer>
					<DynamicPhoneForm errors={errors.phone as PhoneErrorsType} />
				</InputContainer>
				<InputContainer>
					<DynamicAddressForm errors={errors.address as AddressErrorsType} />
				</InputContainer>
				<ControllerButtonsContainer>
					<Button onClick={onCancel} variant="Danger" icon="Cancel">
						Cancelar
					</Button>
					<Button
						disabled={!methods.formState.isValid}
						isLoading={isLoading}
						variant="Success"
						type="submit"
						icon="Check"
					>
						{defaultValue ? "Salvar Edição" : "Salvar"}
					</Button>
				</ControllerButtonsContainer>
			</Form>
		</FormProvider>
	);
};

export default ContactsForm;
