import { CustomFieldset } from "./styles";
import { FieldsetProps } from "./types";

const Fieldset = ({ children }: FieldsetProps) => {
	return <CustomFieldset>{children}</CustomFieldset>;
};

export default Fieldset;
