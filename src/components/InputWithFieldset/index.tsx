import { Fieldset, Legend, Input } from "~/components";
import { InputWithFieldsetProps } from "./types";

const InputWithFieldset = ({
	children,
	inputProps,
	legend,
}: InputWithFieldsetProps) => {
	return (
		<Fieldset>
			<Legend>{legend}</Legend>
			<Input {...inputProps} />
			{children}
		</Fieldset>
	);
};

export default InputWithFieldset;
