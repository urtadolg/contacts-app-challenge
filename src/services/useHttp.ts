import { setupApi } from "./SetupApi";

export const useHttp = () => {
	const api = setupApi("http://localhost:3000");
	return api;
};
