import { Input, Label, InputErrorMessage } from "~/components";
import { InputWithLabelProps } from "./types";

const InputWithLabel = ({
	label,
	id,
	labelProps,
	inputProps,
	errorMessage,
}: InputWithLabelProps) => {
	const hasError = Boolean(errorMessage);

	return (
		<Label hasError={hasError} htmlFor={id} label={label} {...labelProps}>
			<Input hasError={hasError} id={id} {...inputProps} />
			{hasError && (
				<InputErrorMessage>{errorMessage?.message}</InputErrorMessage>
			)}
		</Label>
	);
};

export default InputWithLabel;
