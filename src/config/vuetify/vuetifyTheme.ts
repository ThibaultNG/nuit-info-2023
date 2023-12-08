import type { ThemeDefinition } from "vuetify";

//ATTENTION : when adding or deleting a theme here, do not forget to also modify in vuetifyThemeHeader.ts

export const defaultLightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		background: "#F9F6EE",
		surface: "#FAF9F6",
		primary: "#1c2342"
	}
};

export const defaultDarkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#0f1129",
		surface: "#1a2240",
		primary: "#090a1f"
	}
};

export const xmasTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#023020",
		surface: "#165b33",
		primary: "#7B1818"
	}
};
