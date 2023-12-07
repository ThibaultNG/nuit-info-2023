/* 
	These interfaces define the links within <MainNavBar/>
*/

import type { RouteRecordRaw } from "vue-router";

export interface RouteItemInfo {
	name: string;
	path: string;
	icon: string;
	route: RouteRecordRaw;
}
