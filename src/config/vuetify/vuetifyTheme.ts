import type { ThemeDefinition } from "vuetify";

//ATTENTION : when adding or deleting a theme here, do not forget to also modify in vuetifyThemeHeader.ts

export const defaultLightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		background: "#f5f2f0",
		surface: "#ffffff",
		primary: "#2F64BF",
		dark: "#2B2E41",
		secondary: "#aa763c",
		error: "#bd000c",
		info: "#409bb5",
		success: "#05985a",
		warning: "#fac31e"
	}
};

export const defaultDarkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#424242",
		surface: "#424242",
		primary: "#424242",
		secondary: "#424242"
	}
};

export const wineTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#FFEBEE",
		surface: "#FFEBEE",
		primary: "#B71C1C",
		secondary: "#B71C1C"
	}
};
