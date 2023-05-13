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

export const contactsScrema = object().shape({
	name: string()
		.required("O nome é obrigatório.")
		.matches(/^[A-Za-z\sç]{3,}$/, { message: "Digite um nome válido." }),
	email: string()
		.email("Endereço de email inválido.")
		.required("O email é obrigatório."),
	phone: array().of(
		object().shape({
			number: string()
				.matches(
					/^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/,
					"Por favor, insira um telefone válido"
				)
				.required("O campo telefone é obrigatório."),
		})
	),
	address: array().of(
		object().shape({
			zipCode: string()
				.matches(/^[0-9]{5}-[0-9]{3}$/, "Por favor, insira um CEP válido.")
				.required("O CEP é obrigatório."),
			street: string().required("Digite o nome da Rua."),
			number: number()
				.typeError("Digite um número válido.")
				.required("O Número é obrigatório."),
			neighborhood: string().required("Digite o nome do Bairro."),
			city: string().required("Digite o nome da Cidade."),
			state: string()
				.matches(/^[^0-9]{2}$/, "UF inválido.")
				.required("UF é obrigatório."),
		})
	),
});
