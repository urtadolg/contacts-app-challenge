import { icons } from "~/Icons";
import { CustomIconProps } from "./types";

const CustomIcon = ({ name, ...rest }: CustomIconProps) => {
	const SelectedIcon = icons[name];

	return <SelectedIcon {...rest} />;
};

export default CustomIcon;
