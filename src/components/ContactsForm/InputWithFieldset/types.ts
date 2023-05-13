import { InputHTMLAttributes, ReactNode } from "react";

export interface InputWithFieldsetProps {
	legend: string;
	children?: ReactNode;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
	errorMessage?: string;
}
