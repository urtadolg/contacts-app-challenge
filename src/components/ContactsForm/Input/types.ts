import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	hasError?: boolean;
	children?: ReactNode;
}
