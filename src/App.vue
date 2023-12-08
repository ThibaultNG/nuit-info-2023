<template>
	<v-app>
		<v-app-bar color="primary-lighten-1" scroll-behavior="hide">
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-app-bar-title class="text-h4">Nuit Info 2023</v-app-bar-title>
		</v-app-bar>

		<MainNavBar v-model="drawer" />

		<v-main>
			<RouterView />
		</v-main>

		<v-footer color="background"> </v-footer>
	</v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNavBar from "./component/MainNavBar.vue";
import { ref } from "vue";

const drawer = ref<boolean>(true);
</script>

<style scoped></style>
