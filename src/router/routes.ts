import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/home",
		name: "Home",
		component: () => import("@/modules/menu/MenuPage.vue")
	},
	{
		path: "/game",
		name: "Game",
		component: () => import("@/modules/game/GamePage.vue")
	},    
];

export default routes;
