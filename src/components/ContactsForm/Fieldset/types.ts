import { FieldsetHTMLAttributes, ReactNode } from "react";

export interface FieldsetProps
	extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
	hasError?: boolean;
	children: ReactNode;
}
