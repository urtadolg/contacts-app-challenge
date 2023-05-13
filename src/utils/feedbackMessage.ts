import { toast } from "react-toastify";

export const triggerSuccessMessage = (message: string) =>
	toast.success(message, {});

export const triggerErrorMessage = (message: string) => toast.error(message);
