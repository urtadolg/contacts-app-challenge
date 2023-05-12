import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "~/layout";
import {
	ContactDetailsPage,
	ContactEditPage,
	ContactsListPage,
	NewContactPage,
} from "~/pages";

const router = createBrowserRouter([
	{
		path: "/contacts",
		element: <AppLayout />,
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
