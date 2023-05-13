import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { router } from "./routes";
import { GlobalStyle, theme } from "./styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<RouterProvider router={router} />
		<ToastContainer />
	</ThemeProvider>
);
