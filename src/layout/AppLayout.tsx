import { Outlet } from "react-router-dom";
import { AppWrapper } from "./AppLayoutStyles";

const AppLayout = () => {
	return (
		<AppWrapper>
			{/* <p>header</p> */}
			<Outlet />
			{/* <p>footer</p> */}
		</AppWrapper>
	);
};

export default AppLayout;
