import CustomIcon from "../CustomIcon";
import LoadSpinner from "../LoadSpinner";
import { CustomButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
	variant = "Primary",
	type = "button",
	icon = undefined,
	isLoading = false,
	children,
	...rest
}: ButtonProps) => {
	return (
		<CustomButton variant={variant} type={type} {...rest}>
			{icon && !isLoading && <CustomIcon name={icon} />}
			{isLoading && <LoadSpinner size={20} dark />}
			{children}
		</CustomButton>
	);
};

export default Button;
