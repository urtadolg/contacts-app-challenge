import { InputContainer, Form } from "./styles";
import { Input, InputWithLabel } from "~/components";
import { useContactsForm } from "~/hooks";
import { FormProvider } from "react-hook-form";
import DynamicPhoneForm from "./DynamicPhoneForm";
import DynamicAddressForm from "./DynamicAddressForm";

const ContactsForm = () => {
	const { methods, onSubmit } = useContactsForm();

	return (
		<FormProvider {...methods}>
			<Form onSubmit={methods.handleSubmit(onSubmit)}>
				<InputContainer>
					<InputWithLabel
						id="name"
						label="Nome"
						inputProps={{ ...methods.register("name") }}
					/>
				</InputContainer>
				<InputContainer>
					<InputWithLabel
						id="email"
						label="Email"
						inputProps={{ ...methods.register("email") }}
					/>
				</InputContainer>
				<InputContainer>
					<DynamicPhoneForm />
				</InputContainer>
				<InputContainer>
					<DynamicAddressForm />
				</InputContainer>
				<Input type="submit" />
			</Form>
		</FormProvider>
	);
};

export default ContactsForm;
