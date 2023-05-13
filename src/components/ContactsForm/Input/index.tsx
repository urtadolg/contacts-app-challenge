import React from "react";
import { StyledInput } from "./styles";
import { InputProps } from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ children, hasError = false, ...rest }, ref) => {
		return (
			<>
				<StyledInput $hasError={hasError} ref={ref} {...rest} />
				{children}
			</>
		);
	}
);

export default Input;
