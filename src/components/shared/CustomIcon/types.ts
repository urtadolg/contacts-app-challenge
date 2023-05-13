import { icons } from "~/Icons";
import { IconBaseProps } from "react-icons";

export type IconName = keyof typeof icons;

export interface CustomIconProps extends IconBaseProps {
	name: IconName;
}
