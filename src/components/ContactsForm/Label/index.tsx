import { StyledLabel } from "./styles";
import { LabelProps } from "./types";

const Label = ({ label, hasError = false, children, ...rest }: LabelProps) => {
	return (
		<>
			<StyledLabel $hasError={hasError} {...rest}>
				{label}
			</StyledLabel>
			{children}
		</>
	);
};

export default Label;
