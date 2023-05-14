import { ButtonHTMLAttributes } from "react";
import { IconName } from "../CustomIcon/types";

export type ButtonVariant = "Primary" | "Secondary" | "Danger" | "Success";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	icon?: IconName;
	isLoading?: boolean;
}
