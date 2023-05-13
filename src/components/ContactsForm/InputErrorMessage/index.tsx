import { InputErrorMessageProps } from "./types";
import { StyledErrorMessage } from "./styles";

const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
	return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

export default InputErrorMessage;
