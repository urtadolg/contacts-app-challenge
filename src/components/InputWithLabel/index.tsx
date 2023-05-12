import { Input, Label } from "~/components";
import { InputWithLabelProps } from "./types";

const InputWithLabel = ({
	label,
	id,
	labelProps,
	inputProps,
}: InputWithLabelProps) => {
	return (
		<Label htmlFor={id} label={label} {...labelProps}>
			<Input id={id} {...inputProps} />
		</Label>
	);
};

export default InputWithLabel;
