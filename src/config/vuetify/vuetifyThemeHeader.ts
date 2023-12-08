export interface headerThemeItem {
	id: string;
	displayedName: string;
	icon: string;
}
export const headerThemeList: headerThemeItem[] = [
	{
		id: "defaultLightTheme",
		displayedName: "Light",
		icon: "mdi-white-balance-sunny"
	},
	{
		id: "defaultDarkTheme",
		displayedName: "Dark",
		icon: "mdi-moon-waxing-crescent"
	},
	{
		id: "xmasTheme",
		displayedName: "Xmas",
		icon: "mdi-candycane"
	}
];
