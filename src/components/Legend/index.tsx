import { CustomLegend } from "./styles";
import { LegendProps } from "./types";

const Legend = ({ children }: LegendProps) => {
	return <CustomLegend>{children}</CustomLegend>;
};

export default Legend;
