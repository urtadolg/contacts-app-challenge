import { Fieldset, Legend, Input, InputErrorMessage } from "~/components";
import { InputWithFieldsetContainer } from "./styles";
import { InputWithFieldsetProps } from "./types";

const InputWithFieldset = ({
	children,
	inputProps,
	legend,
	errorMessage,
}: InputWithFieldsetProps) => {
	const hasError = Boolean(errorMessage);

	return (
		<InputWithFieldsetContainer>
			<Fieldset hasError={hasError}>
				<Legend hasError={hasError}>{legend}</Legend>
				<Input id="input" hasError={hasError} {...inputProps} />
				{children}
			</Fieldset>
			{errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
		</InputWithFieldsetContainer>
	);
};

export default InputWithFieldset;
