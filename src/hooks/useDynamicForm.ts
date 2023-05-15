import { useFieldArray, useFormContext } from "react-hook-form";

const useDynamicForm = (name: string) => {
	const { control, register } = useFormContext();

	const addNewInputField = () => {
		append({ number: "" });
	};

	const removeInputField = (index: number) => {
		remove(index);
	};

	const { fields, append, remove } = useFieldArray({
		control,
		name,
	});

	const isRemoveFieldButtonDisabled = fields.length === 1;

	return {
		fields,
		register,
		addNewInputField,
		removeInputField,
		isRemoveFieldButtonDisabled,
	};
};

export default useDynamicForm;
