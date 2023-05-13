import { FieldError } from "react-hook-form";

export type AddressErrorsType = {
	zipCode: FieldError;
	street: FieldError;
	number: FieldError;
	neighborhood: FieldError;
	city: FieldError;
	state: FieldError;
}[];

export interface DynamicAddressFormProps {
	errors: AddressErrorsType;
}
