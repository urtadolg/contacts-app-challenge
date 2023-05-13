import { ReactNode } from "react";

export interface LoadSpinnerProps {
	children?: ReactNode;
	size?: number;
}

export interface CustomSpinnerProps {
	$size: number;
}
