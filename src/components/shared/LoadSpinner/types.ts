import { ReactNode } from "react";

export interface LoadSpinnerProps {
	children?: ReactNode;
	size?: number;
	dark?: boolean;
}

export interface CustomSpinnerProps {
	$size: number;
	$dark: boolean;
}
