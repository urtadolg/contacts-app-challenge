import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "Primary" | "Secondary" | "Danger" | "Success";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}
