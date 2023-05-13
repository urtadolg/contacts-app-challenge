import { StyledTitle } from "./styles";
import { TitleProps } from "./types";

const Title = ({ children }: TitleProps) => {
	return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
