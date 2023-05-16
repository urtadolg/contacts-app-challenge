import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			white: string;
			black: string;
			blue: {
				default: string;
				light: string;
			};
			green: {
				default: string;
				light: string;
			};
			red: {
				default: string;
				light: string;
			};
			gray: {
				default: string;
				light: string;
				dark: string;
				700: string;
				shadow: string;
			};
		};
		buttonColors: {
			Primary: {
				color: string;
				backgroundColor: string;
			};
			Secondary: {
				color: string;
				backgroundColor: string;
			};
			Danger: {
				color: string;
				backgroundColor: string;
			};
			Success: {
				color: string;
				backgroundColor: string;
			};
		};
		breakpoints: {
			md: string;
			lg: string;
			xl: string;
		};
		device: {
			tablet: string;
			laptop: string;
			desktop: string;
		};
	}
}
