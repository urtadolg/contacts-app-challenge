import { array, number, object, string } from "yup";

export const defaultValues = {
	name: "",
	email: "",
	phone: [
		{
			number: "",
		},
	],
	address: [
		{
			zipCode: "",
			street: "",
			number: "",
			neighborhood: "",
			city: "",
			state: "",
		},
	],
};

export const contactsScrema = object().shape({
	name: string().required().min(10),
	email: string().required(),
	phone: array().of(object().shape({ number: number().required() })),
	address: array().of(
		object().shape({
			zipCode: number().required(),
			street: string().required(),
			number: number().required(),
			neighborhood: string().required(),
			city: string().required(),
			state: string().required(),
		})
	),
});
