import { CustomButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
	variant = "Primary",
	type = "button",
	children,
	...rest
}: ButtonProps) => {
	return (
		<CustomButton variant={variant} type={type} {...rest}>
			{children}
		</CustomButton>
	);
};

export default Button;
