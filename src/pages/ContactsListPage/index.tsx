import { ContactsList } from "~/components";
import { SearchBoxProvider } from "~/store";

const ContactsListPage = () => {
	return (
		<SearchBoxProvider>
			<ContactsList />
		</SearchBoxProvider>
	);
};

export default ContactsListPage;
