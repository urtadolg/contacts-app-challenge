import React from "react";
import { StyledInput } from "./styles";
import { InputProps } from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ children, ...rest }, ref) => {
		return (
			<>
				<StyledInput ref={ref} {...rest} />
				{children}
			</>
		);
	}
);

export default Input;
