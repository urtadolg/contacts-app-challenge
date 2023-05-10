import { useParams } from "react-router-dom";

const ContactDetailsPage = () => {
	const { id } = useParams();

	return <h1>Contacts Details Page...{id}</h1>;
};

export default ContactDetailsPage;
