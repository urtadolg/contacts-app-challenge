import { createBrowserRouter, Navigate } from "react-router-dom";
import {
	ContactDetailsPage,
	ContactEditPage,
	ContactsListPage,
	NewContactPage,
} from "~/pages";

const router = createBrowserRouter([
	{
		path: "/contacts",
		children: [
			{
				index: true,
				element: <ContactsListPage />,
			},
			{
				path: "new",
				element: <NewContactPage />,
			},
			{
				path: ":id",
				element: <ContactDetailsPage />,
			},
			{
				path: "edit/:id",
				element: <ContactEditPage />,
			},
		],
	},
	{
		path: "/*",
		element: <Navigate replace to="/contacts" />,
	},
]);

export default router;
