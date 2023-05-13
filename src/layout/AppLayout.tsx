import { Outlet } from "react-router-dom";
import { ContactsProvider } from "~/store";
import { AppWrapper } from "./AppLayoutStyles";

const AppLayout = () => {
	return (
		<ContactsProvider>
			<AppWrapper>
				<Outlet />
			</AppWrapper>
		</ContactsProvider>
	);
};

export default AppLayout;
