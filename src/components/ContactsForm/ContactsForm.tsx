import { InputContainer, Form, ControllerButtonsContainer } from "./styles";
import {
	Button,
	InputWithLabel,
	CustomIcon,
	DynamicPhoneForm,
	DynamicAddressForm,
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
					<Button onClick={onCancel} variant="Danger">
						<CustomIcon name="Cancel" />
						Cancelar
					</Button>
					<Button
						disabled={!methods.formState.isValid}
						variant="Success"
						type="submit"
					>
						{isLoading ? <p>Loading...</p> : <CustomIcon name="Check" />}
						Salvar
					</Button>
				</ControllerButtonsContainer>
			</Form>
		</FormProvider>
	);
};

export default ContactsForm;
