import { StyledText } from "./styles";
import { TextProps } from "./types";

const Text = ({ children, ...rest }: TextProps) => {
	return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
