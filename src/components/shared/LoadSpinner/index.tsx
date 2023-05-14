import { CustomSpinner } from "./styles";
import { LoadSpinnerProps } from "./types";

const LoadSpinner = ({
	children,
	dark = false,
	size = 40,
}: LoadSpinnerProps) => {
	return (
		<CustomSpinner $dark={dark} $size={size}>
			{children}
		</CustomSpinner>
	);
};

export default LoadSpinner;
