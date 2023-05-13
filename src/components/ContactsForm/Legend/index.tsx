import { CustomLegend } from "./styles";
import { LegendProps } from "./types";

const Legend = ({ hasError = false, children }: LegendProps) => {
	return <CustomLegend $hasError={hasError}>{children}</CustomLegend>;
};

export default Legend;
