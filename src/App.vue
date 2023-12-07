<template>
	<v-app>
		<v-app-bar color="primary-lighten-1">
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-app-bar-title class="text-h4">Nuit Info 2023</v-app-bar-title>
		</v-app-bar>

		<MainNavBar v-model="drawer" />

		<v-main>
			<div class="main-container">
				<RouterView />
			</div>
		</v-main>

		<v-footer app>
			<div class="text-center w-100">
				{{ new Date().getFullYear() }} — <strong>EPISEN SI ING1 & ING3</strong>
			</div>
		</v-footer>
	</v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNavBar from "./component/MainNavBar.vue";
import { ref } from "vue";

const drawer = ref<boolean>(true);
</script>

<style scoped>
.main-container {
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 50px;
	padding-bottom: 100px;
	box-sizing: border-box;
}
</style>
