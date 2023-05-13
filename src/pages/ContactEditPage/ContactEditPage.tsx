import { useParams } from "react-router-dom";
import { ContactsForm, Title } from "~/components";

const ContactEditPage = () => {
	const { id } = useParams();

	const DummyDefaultValues = {
		id: 12345,
		category: "T",
		name: "Teste Edição",
		email: "teste.edição@gmail.com",
		phone: [
			{
				number: "(19) 98765-4321",
			},
		],
		address: [
			{
				zipCode: "12345-678",
				street: "Nome Rua",
				number: 12,
				neighborhood: "Nome Bairro",
				city: "Nome Cidade",
				state: "SP",
			},
		],
	};

	return (
		<div style={{ padding: "50px 15px" }}>
			<Title>Editar contato {id}</Title>
			<ContactsForm defaultValue={DummyDefaultValues} />
		</div>
	);
};

export default ContactEditPage;
