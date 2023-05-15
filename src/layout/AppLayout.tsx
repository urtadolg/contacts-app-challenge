import { Outlet } from "react-router-dom";
import { AppWrapper, AppContainer } from "./styles";
import { ContactsProvider } from "~/store";

const AppLayout = () => {
	return (
		<ContactsProvider>
			<AppWrapper>
				<AppContainer>
					<Outlet />
				</AppContainer>
			</AppWrapper>
		</ContactsProvider>
	);
};

export default AppLayout;
