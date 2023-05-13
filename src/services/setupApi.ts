import axios from "axios";

export const setupApi = (baseURL: string) => {
	const api = axios.create({
		baseURL,
		headers: { "Content-Type": "application/json" },
	});

	return api;
};
