import { LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	label: string;
	hasError?: boolean;
	children?: ReactNode;
}
