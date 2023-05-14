import { StyledText } from "./styles";
import { TextProps } from "./types";

const Text = ({ children }: TextProps) => {
	return <StyledText>{children}</StyledText>;
};

export default Text;
