import { CustomButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ variant = "Primary", children, ...rest }: ButtonProps) => {
	return (
		<CustomButton variant={variant} {...rest}>
			{children}
		</CustomButton>
	);
};

export default Button;
