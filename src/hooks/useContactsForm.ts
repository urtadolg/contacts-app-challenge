import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactsScrema, defaultValues } from "~/constants";

const useContactsForm = () => {
	const resolver = yupResolver(contactsScrema);

	const methods = useForm({
		resolver,
		defaultValues,
	});

	const onSubmit = (data: typeof defaultValues) => {
		console.log("enviando");
		console.log({ data });
	};

	return {
		methods,
		onSubmit,
	};
};

export default useContactsForm;
