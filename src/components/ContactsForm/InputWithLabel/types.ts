import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputWithLabelProps {
	label: string;
	id: string;
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
	errorMessage?: FieldError;
}
