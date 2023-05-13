const colors = {
	white: "#fff",
	black: "#000",
	blue: {
		default: "#0A7EE3",
		light: "#3890dd",
	},
	green: {
		default: "#2C8D1C",
		light: "#549b49",
	},
	red: {
		default: "#DD3030",
		light: "#eeb9b9",
	},
	gray: {
		default: "#D7D7D7",
		light: "#F5F5F5",
		dark: "#7E7E7E",
		700: "#303030",
	},
};

const buttonColors = {
	Primary: {
		color: colors.white,
		backgroundColor: colors.blue.default,
	},
	Secondary: {
		color: colors.red.default,
		backgroundColor: colors.gray.light,
	},
	Danger: {
		color: colors.white,
		backgroundColor: colors.red.default,
	},
	Success: {
		color: colors.white,
		backgroundColor: colors.green.default,
	},
};

const breakpoints = {
	sm: "375px",
	md: "576px",
	lg: "768px",
	xl: "1366px",
};

const theme = { colors, buttonColors, breakpoints };

export default theme;
