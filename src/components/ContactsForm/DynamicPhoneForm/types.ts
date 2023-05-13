import { FieldError } from "react-hook-form";

export type PhoneErrorsType = {
	number: FieldError;
}[];

export interface DynamicPhoneFormProps {
	errors?: PhoneErrorsType;
}
