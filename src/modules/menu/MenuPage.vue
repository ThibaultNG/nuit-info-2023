<template>
	<v-card style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0)">
		<v-card-title class="text-h3 mt-10" style="display: flex; justify-content: center">
			Earth President
		</v-card-title>

		<div
			style="
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			"
		>
			<v-btn
				class="card-btn"
				color="primary"
				text="Tutoriel"
				@click="() => startGame('tutorial')"
			/>
			<v-btn
				class="card-btn"
				color="secondary"
				text="Nouvelle Partie"
				@click="() => startGame('general')"
			/>
			<v-btn class="card-btn" color="secondary" text="Succès" />
			<ChangeTheme />
		</div>
	</v-card>
</template>

<script setup lang="ts">
import ChangeTheme from "@/component/ChangeTheme.vue";
import { useGameStore } from "../game/store/gameStore";
import { useRouter } from "vue-router";

const router = useRouter();

const gameStore = useGameStore();

function startGame(bundleName: string) {
	gameStore.initGame(bundleName);
    console.log(gameStore.cards)
	router.push({ path: "/game" });
}
</script>

<style scoped>
.card-btn {
	width: 80%;
	height: 50px;
	margin-bottom: 40px;
}
</style>
