import { HTMLAttributes, ReactNode } from "react";

export interface LegendProps extends HTMLAttributes<HTMLLegendElement> {
	children: ReactNode;
}
