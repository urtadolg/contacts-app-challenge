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
			number: undefined,
			neighborhood: "",
			city: "",
			state: "",
		},
	],
};

const phoneSchema = object().shape({
	number: string()
		.required("O campo telefone é obrigatório.")
		.matches(
			/\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/,
			"Por favor, insira um telefone válido"
		),
});

const addressSchema = object().shape({
	zipCode: string()
		.required("O CEP é obrigatório.")
		.matches(/^[0-9]{5}-[0-9]{3}$/, "Por favor, insira um CEP válido."),
	street: string().required("Digite o nome da Rua."),
	number: number()
		.typeError("Digite um número válido.")
		.required("O Número é obrigatório."),
	neighborhood: string().required("Digite o nome do Bairro."),
	city: string().required("Digite o nome da Cidade."),
	state: string()
		.required("UF é obrigatório.")
		.matches(/^[^0-9]{2}$/, "UF inválido."),
});

export const contactsSchema = object().shape({
	name: string()
		.required("O nome é obrigatório.")
		.matches(/^[A-Za-z\s\u00c0-\u00ffçÇ]{3,}$/, {
			message: "Digite um nome válido.",
		}),
	email: string()
		.email("Endereço de email inválido.")
		.required("O email é obrigatório."),
	phone: array().of(phoneSchema),
	address: array().of(addressSchema),
});
