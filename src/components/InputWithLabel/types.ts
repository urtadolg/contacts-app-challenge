import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

export interface InputWithLabelProps {
	label: string;
	id: string;
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
