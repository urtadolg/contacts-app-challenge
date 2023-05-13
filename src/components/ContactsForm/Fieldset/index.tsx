import { CustomFieldset } from "./styles";
import { FieldsetProps } from "./types";

const Fieldset = ({ hasError = false, children }: FieldsetProps) => {
	return <CustomFieldset $hasError={hasError}>{children}</CustomFieldset>;
};

export default Fieldset;
