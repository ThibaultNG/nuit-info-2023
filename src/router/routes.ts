import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/home",
		name: "Home",
		component: () => import("@/views/HomePage.vue")
	}
];

export default routes;
