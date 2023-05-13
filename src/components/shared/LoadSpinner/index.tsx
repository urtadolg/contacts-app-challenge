import { CustomSpinner } from "./styles";
import { LoadSpinnerProps } from "./types";

const LoadSpinner = ({ children, size = 40 }: LoadSpinnerProps) => {
	return <CustomSpinner $size={size}>{children}</CustomSpinner>;
};

export default LoadSpinner;
