import { useParams } from "react-router-dom";

const ContactEditPage = () => {
	const { id } = useParams();

	return <h1>Contacts Edit Page...{id}</h1>;
};

export default ContactEditPage;
