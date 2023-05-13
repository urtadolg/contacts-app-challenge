import { icons } from "~/Icons";
import { CustomIconProps } from "./types";

const CustomIcon = ({ name, size = 20, ...rest }: CustomIconProps) => {
	const SelectedIcon = icons[name];

	return <SelectedIcon size={size} {...rest} />;
};

export default CustomIcon;
