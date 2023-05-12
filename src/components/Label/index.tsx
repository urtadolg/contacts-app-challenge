import { StyledLabel } from "./styles";
import { LabelProps } from "./types";

const Label = ({ label, children, ...rest }: LabelProps) => {
	return (
		<>
			<StyledLabel {...rest}>{label}</StyledLabel>
			{children}
		</>
	);
};

export default Label;
