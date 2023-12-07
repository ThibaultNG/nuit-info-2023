import { createRouter, createWebHistory, type Router } from "vue-router";
import routes from "./routes";

const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		...routes,
		{
			path: "/home",
			component: () => import("@/views/HomePage.vue")
		},
		{
			path: "/:pathMatch(.*)*",
			component: () => import("@/views/Error404Page.vue")
		}
	]
});

export default router;
